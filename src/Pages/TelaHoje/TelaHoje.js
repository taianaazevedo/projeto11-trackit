import check from "../../Assets/Vector.png";
import { TelaHoje, Dia, CardHabito, Descricao, CheckBox } from "./styles";
import dayjs from "dayjs";


export default function Hoje() {
    return (
        <TelaHoje>
            <Dia>
                <h1>{dayjs().format('DD/MM/YYYY')}</h1>
                <br />
                <p>Nenhum hábito concluído ainda</p>
                <CardHabito>
                    <Descricao>
                        <h1>Ler 1 capítulo de livro</h1>
                        <br/>
                        <p>Sequência atual: 3 dias</p>
                        <p>Seu recorde: 5 dias</p>
                    </Descricao>
                    <CheckBox>
                        <img src={check}/>
                    </CheckBox>
                </CardHabito>
                <CardHabito>
                    <Descricao>
                        <h1>Ler 1 capítulo de livro</h1>
                        <br/>
                        <p>Sequência atual: 3 dias</p>
                        <p>Seu recorde: 5 dias</p>
                    </Descricao>
                    <CheckBox>
                        <img src={check}/>
                    </CheckBox>
                </CardHabito>
                <CardHabito>
                    <Descricao>
                        <h1>Ler 1 capítulo de livro</h1>
                        <br/>
                        <p>Sequência atual: 3 dias</p>
                        <p>Seu recorde: 5 dias</p>
                    </Descricao>
                    <CheckBox>
                        <img src={check}/>
                    </CheckBox>
                </CardHabito>
            </Dia>
        </TelaHoje>
    )
}

