import { Container, Form, Avatar } from "./styles";

import { Input } from "../../components/input";
import { Button } from "../../components/Button";

import { FiUser, FiMail, FiLock, FiCamera, FiArrowLeft } from "react-icons/fi"

export function Profile() {
    return (
        <Container>
            <header>
                <a href="/">
                    <FiArrowLeft/>
                </a>
            </header>


            <Form>
                <Avatar>
                    <img src="https://github.com/LMiranda10.png" 
                    alt="Foto do usuário" />

                    <label htmlFor="Avatar">
                        <FiCamera/>

                        <input 
                        id="Avatar"
                        type="file"
                        />
                    </label>
                </Avatar>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon= { FiUser }
                />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon= { FiMail }
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon= { FiLock }
                    id= 'senha'
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon= { FiLock }
                />

                <Button title={"Salvar"}/>
            </Form>
        </Container>
    )
}