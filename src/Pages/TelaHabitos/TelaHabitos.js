import { Container, MeusHabitos, Text} from "./styles"
import BoxHabito from "./BoxHabito"
import { useState } from "react"

export default function Habitos() {
    const [mostraCriarHabito, setMostraCriarHabito] = useState(false);

    function adicionarHabito(){
        setMostraCriarHabito(true);
    }


    return (    
        <Container>
             <MeusHabitos>
                <p>Meus Hábitos</p>
                <button onClick={adicionarHabito}>+</button>
            </MeusHabitos>
            {mostraCriarHabito && <BoxHabito cancelaCriarHabito={setMostraCriarHabito}/>}
            <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text>
        </Container>    
    )
}

