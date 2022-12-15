import { Container, MeusHabitos, Text} from "./styles"

export default function Habitos() {
    return (    
        <Container>
             <MeusHabitos>
                <p>Meus Hábitos</p>
                <button>+</button>
            </MeusHabitos>
            <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text>
        </Container>    
    )
}

