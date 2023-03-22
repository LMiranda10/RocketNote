import { Container, Links, Content } from './styles';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';

export function Details () {

  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title={"Excluir nota"} />

          <h1>Introdução ao react.js</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quos quas fugiat praesentium? Dolorum dolores, ea ipsam, dignissimos tempore illo dicta ducimus fugit doloremque reprehenderit enim. Impedit similique dignissimos atque.</p>

          <Section title={"Links Úteis"}>
            <Links>
              <li>
                <a href="#">Link 1</a>
              </li>

              <li>
                <a href="#">Link 2</a>
              </li>
            </Links>
          </Section>

          <Section title={"Marcadores"} >
            <Tag title="Express"/>
            <Tag title="Node"/>
          </Section>

          <Button title = "Voltar" />
        </Content>
      </main>
    </Container>
  )
}