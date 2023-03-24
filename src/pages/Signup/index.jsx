import { Input } from "../../components/input"
import { Button } from "../../components/Button"

import { FiLogIn, FiMail, FiUser } from "react-icons/fi"

import { Background, Container, Form } from "./styles";

export function SignUp() {
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
                    />

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

                    <Button title="Cadastrar"/>

                    <a href="">
                         Voltar para login
                    </a>
               </Form>
          </Container>
     )
}