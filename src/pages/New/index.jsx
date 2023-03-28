import { Container, Form } from "./styles";


import { Header } from "../../components/Header"
import { Input } from "../../components/input"
import { Button } from "../../components/Button"
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section"
import { Noteitem } from "../../components/Noteitem";
import { Link } from "react-router-dom";


export function New() {
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
                        
                        <Input placeholder="Titulo"/>

                        <Textarea placeholder="Observações"/>

                        <Section title={"Links úteis"}>
                            <Noteitem value={"https://Rocketseat.com"}/>
                            <Noteitem placeholder="Novo link" isNew/>
                        </Section>

                        <Section title={"Marcadores"}>
                            <div className="tags">
                                <Noteitem value={"React"}/>
                                <Noteitem placeholder="Novo marcador" isNew/>
                            </div>
                        </Section>

                        <Button title={"Salvar"}/>
                    </Form>
            </main>
        </Container>
    )
}