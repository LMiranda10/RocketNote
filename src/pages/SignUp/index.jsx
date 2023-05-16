import { useState } from "react";

import { Input } from "../../components/input"
import { Button } from "../../components/Button"

import { FiLogIn, FiMail, FiUser } from "react-icons/fi"

import { Background, Container, Form } from "./styles";
import { Link } from "react-router-dom";

export function SignUp() {
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");

     function handleSignUp(){
          console.log(name, email, password)
     }


     return (
          <Container>
               <Background/>

               <Form>
                    <h1>Rocket Notes</h1>
                    <p>Aplicações para salvar e gerenciar seus links úteis</p>

                    <h2>Crie sua conta</h2>

                    <Input
                         placeholder="Nome"
                         type="text"
                         icon= { FiUser }
                         onChange= {e => setName(e.target.value)}
                    />

                    <Input
                         placeholder="E-mail"
                         type="text"
                         icon= { FiMail }
                         onChange= {e => setEmail(e.target.value)}
                    />

                    <Input
                         placeholder="Senha"
                         type="password"
                         icon= { FiLogIn }
                         onChange= {e => setPassword(e.target.value)}
                    />

                    <Button title="Cadastrar" onClick = {handleSignUp} />

                    <Link to="/">
                         Voltar para login
                    </Link>
               </Form>
          </Container>
     )
}