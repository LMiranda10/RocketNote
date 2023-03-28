import { Container, Brand, Menu, Search, Content, NewNotes } from './styles'
import { FiPlus, FiSearch } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/input'
import { Note } from '../../components/Note'


export function Home( ) {
    return (
        <Container>

            <Brand>
            <h1>RocketNotes</h1>
            </Brand>

            <Header />

            <Menu>
                <li><ButtonText title="Todos"/></li>
                <li><ButtonText title="React"/></li>
                <li><ButtonText title="Nodejs"/></li>
            </Menu>

            <Search>
                <Input placeholder='Pesquisar por um titulo' icon={FiSearch}/>
            </Search>

            <Content>
                <Section title='Minhas notas'>
                    <Note data={ {
                        title: 'React', 
                    tags:   [
                        {id: '1',  name: 'React'},
                        {id: '2',  name: 'Rocket'}
                    ]
                }}
                />
                </Section>
            </Content>

            <NewNotes to="/new">
                <FiPlus/>
                Criar nota
            </NewNotes>

        </Container>
    )
}