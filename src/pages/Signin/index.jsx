import { Input } from "../../components/input"
import { Button } from "../../components/Button"

import { FiLogIn, FiMail } from "react-icons/fi"

import { Background, Container, Form } from "./styles";

export function SignIn() {
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

                    <a href="">
                         Criar conta
                    </a>
               </Form>

                    <Background/>
          </Container>
     )
}