import { Container, Form } from "./styles";

import { useState } from "react";
import { api } from "../../Services/api";
import { Link, useNavigate } from "react-router-dom";

import { Header } from "../../components/Header"
import { Input } from "../../components/input"
import { Button } from "../../components/Button"
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section"
import { Noteitem } from "../../components/Noteitem";

export function New() {
    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");


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
        await api.post("/notes", {
            title,
            description,
            tags,
            links
        });

        alert("Nota criada com sucesso");
        navigate("/");
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

                            <Link to="/">Voltar</Link>

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
                                    tags.map((tag, index) => (
                                        <Noteitem
                                            key={String(index)}
                                            value={tags}
                                            onClick={()=>handleRemoveTag(tag)}
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