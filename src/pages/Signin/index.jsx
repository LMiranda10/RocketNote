import { Input } from "../../components/input"
import { Button } from "../../components/Button"
import { useAuth } from "../../hooks/auth";

import { FiLogIn, FiMail } from "react-icons/fi"

import { Background, Container, Form } from "./styles";
import { Link } from "react-router-dom";
import { useState } from "react";

export function SignIn() {
     const [ email, setEmail ] = useState("")
     const [ password, setPassword ] = useState("")

     const { signIn } = useAuth();

     function handleSignIn() {
          signIn({ email, password })
     }

     return (
          <Container>
               <Form>
                    <h1>Rocket Notes</h1>
                    <p>Aplicações para salvar e gerenciar seus links úteis</p>

                    <h2>Faça seu login</h2>

                    <Input
                         placeholder="E-mail"
                         type="text"
                         icon= { FiMail }
                         onChange = {e => setEmail(e.target.value)}
                    />

                    <Input
                         placeholder="Senha"
                         type="password"
                         icon= { FiLogIn }
                         onChange = {e => setPassword(e.target.value)}
                    />

                    <Button title="Entrar" onClick = { handleSignIn } />

                    <Link to="/register">
                         Criar conta
                    </Link>
               </Form>

                    <Background/>
          </Container>
     )
}