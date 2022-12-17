import check from "../../Assets/Vector.png";
import { TelaHoje, Dia, CardHabito, Descricao, CheckBox } from "./styles";
import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import UsuarioContext from "../../Context/UsuarioContext";


export default function Hoje() {
    const [habitosHoje, setHabitosHoje] = useState([]);
    const { usuarioLogado } = useContext(UsuarioContext)

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${usuarioLogado.token}`
            }
        }
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);
        promise.then((res) => {
            setHabitosHoje(res.data);
        })
        promise.catch((err) => alert(err.response.data.message))

    }, [])

    return (
        <TelaHoje>
            <Dia>
                <h1>{dayjs().format('DD/MM/YYYY')}</h1>
                <br />
                {habitosHoje.length === 0 ? <p>Nenhum hábito concluído ainda</p> : <p className="textoVerde">100% dos hábitos concluídos</p>}
                {habitosHoje.map((habito) => <CardHabito key={habito.key}>
                    <Descricao>
                        <h1>{habito.name}</h1>
                        <br/>
                        <p>Sequência atual: {habito.currentSequence} dias</p>
                        <p>Seu recorde: {habito.highestSequence} dias</p>
                    </Descricao>
                    <CheckBox>
                        <img src={check}/>
                    </CheckBox>
                </CardHabito>)}
            </Dia>
        </TelaHoje>
    )
}

