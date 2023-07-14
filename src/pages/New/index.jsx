import { Container, Form } from "./styles";

import { useState } from "react";
import { api } from "../../Services/api";
import { useNavigate } from "react-router-dom";

import { Header } from "../../components/Header"
import { Input } from "../../components/input"
import { Button } from "../../components/Button"
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section"
import { Noteitem } from "../../components/Noteitem";
import { ButtonText } from "../../components/ButtonText";

export function New() {
    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    function handleBack() {
        navigate(-1)
      }

    function handleAddLink() {
        setLinks(prevState => [...prevState, newLink]);
        setNewLink("");
    }

    function handleRemoveLink(deleted) {
        setLinks(prevState => prevState.filter(link => link!==deleted))
    }

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag])
        setNewTag("")
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag!==deleted))
    }

    async function handleNewNote() {
        if(newLink){
            return alert("Adicione ao menos um link")
        }
        
        if(newTag){
            return alert("Adicione uma tag")
        }


        await api.post("/notes", {
            title,
            description,
            tags,
            links
        });

        alert("Nota criada com sucesso");
        navigate(-1);
    }

    return (
        <Container>
            <Header/>

            <main>
                    <Form>
                        <header>
                            <h1>
                                Criar nota
                            </h1>

                            <ButtonText title={"Voltar"} onClick={handleBack}/>

                        </header>

                        <Input
                            placeholder="Titulo"
                            onChange={e => setTitle(e.target.value)}
                        />

                        <Textarea 
                            placeholder="Observações"
                            onChange={e => setDescription(e.target.value)}
                        />

                        <Section title={"Links úteis"}>

                            {
                                links.map((link, index) => (
                                    <Noteitem
                                    key={String(index)}
                                    value={link}
                                    onClick={()=> handleRemoveLink(link)}
                                   />
                                ))
                            }

                            <Noteitem
                             isNew
                             placeholder="Novo link"
                             value={newLink}
                             onChange = {e => setNewLink(e.target.value)}
                             onClick={handleAddLink}
                            />

                        </Section>

                        <Section title={"Marcadores"}>
                            <div className="tags">
                                {
                                    tags.map((tags, index) => (
                                        <Noteitem
                                            key={String(index)}
                                            value={tags}
                                            onClick={()=>handleRemoveTag(tags)}
                                        />
                                    ))
                                }

                                <Noteitem
                                    isNew
                                    placeholder="Nova tag"
                                    onChange = {e => setNewTag(e.target.value)}
                                    value={newTag}
                                    onClick={handleAddTag}
                                />
                            </div>
                        </Section>

                        <Button
                         title={"Salvar"}
                         onClick={handleNewNote}
                         />
                    </Form>
            </main>
        </Container>
    )
}