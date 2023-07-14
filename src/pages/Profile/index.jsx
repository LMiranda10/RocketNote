import { Container, Form, Avatar } from "./styles";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiUser, FiMail, FiLock, FiCamera, FiArrowLeft } from "react-icons/fi"

import { Input } from "../../components/input";
import { Button } from "../../components/Button";

import { useAuth } from "../../hooks/auth";

import { api } from '../../Services/api';
import avatarPlaceHolder from "../../assets/avatar_placeholder.svg"
import { ButtonText } from "../../components/ButtonText";

export function Profile() {
    const {user, updateProfile} = useAuth();
    const navigate = useNavigate();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;
    const [avatar, setAvatar] = useState(avatarUrl);
    const [avatarFile, setAvatarFile] = useState(null);

    function handleBack() {
        navigate(-1)
      }

    async function handleUpdate() {
        const updated = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld
        }

        const userUpdated = Object.assign(user, updated)

        await updateProfile({user: userUpdated,avatarFile });
    }

    async function handleChangeAvatar(event) {
        const file = event.target.files[0];
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview) 
    }

    return (
        <Container>
            <header>
                <ButtonText
                 title={<FiArrowLeft/>} 
                 onClick={handleBack}
                 />
            </header>


            <Form>
                <Avatar>
                    <img src={avatar}
                    alt="Foto do usuário" />

                    <label htmlFor="Avatar">
                        <FiCamera/>

                        <input 
                        id="Avatar"
                        type="file"
                        onChange={handleChangeAvatar}
                        />
                    </label>
                </Avatar>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon= { FiUser }
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon= { FiMail }
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon= { FiLock }
                    id= 'senha'
                    onChange={e => setPasswordOld(e.target.value)}
                />

                <Input
                    placeholder="Nova senha"
                    type="password"
                    icon= { FiLock }
                    onChange={e => setPasswordNew(e.target.value)}
                />

                <Button title={"Salvar"} onClick={handleUpdate}/>   
            </Form>
        </Container>
    )
}