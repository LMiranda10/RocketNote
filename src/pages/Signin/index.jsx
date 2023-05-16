import { Input } from "../../components/input"
import { Button } from "../../components/Button"
import { useAuth } from "../../hooks/auth";

import { FiLogIn, FiMail } from "react-icons/fi"

import { Background, Container, Form } from "./styles";
import { Link } from "react-router-dom";

export function SignIn() {
     const data = useAuth();
     console.log("MEU CONTEXTO =>", data)

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
                    />

                    <Input
                         placeholder="Senha"
                         type="password"
                         icon= { FiLogIn }
                    />

                    <Button title="Entrar"/>

                    <Link to="/register">
                         Criar conta
                    </Link>
               </Form>

                    <Background/>
          </Container>
     )
}