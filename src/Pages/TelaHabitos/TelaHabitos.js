import { Container, MeusHabitos, Text } from "./styles";
import BoxHabito from "./BoxHabito";
import { useContext, useState, useEffect } from "react";
import UsuarioContext from "../../Context/UsuarioContext";
import axios from "axios";
import styled from "styled-components";
import lixeira from "../../Assets/lixeira.png"


export default function Habitos() {
    const [mostraCriarHabito, setMostraCriarHabito] = useState(false);
    const [habito, setHabito] = useState(null);
    const { usuarioLogado } = useContext(UsuarioContext);

    function adicionarHabito() {
        setMostraCriarHabito(true);
    }

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${usuarioLogado.token}`
            }
        }
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);
        promise.then((res) => setHabito(res.data));
        promise.catch((err) => console.log(err.response.data));
    }, [])

    if (habito === null) {
        return <div>Carregando...</div>
    }


    return (
        <Container>
            <MeusHabitos>
                <p>Meus Hábitos</p>
                <button onClick={adicionarHabito}>+</button>
            </MeusHabitos>
            {mostraCriarHabito && <BoxHabito setMostraCriarHabito={setMostraCriarHabito} />}
            {habito.map((h) =>
                <CadaHabito key={h.id}>
                    <NomeHabito>
                        <p>{h.name}</p>
                        <img src={lixeira} />
                    </NomeHabito>
                    <Semana>
                        {h.days.map((d) =>
                            <Dias key={d}>{d}</Dias>)}
                    </Semana>
                </CadaHabito>)}
            <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text>
        </Container>
    )
}

const CadaHabito = styled.div`
    margin-top:20px;
    width:340px;
    height: 90px;
    background-color:#FFFFFF; 
    border-radius: 10px; 
    display:flex;
    flex-direction: column;
    p{
        margin-left:10px;
        margin-top:10px;
        color:#666666;
        font-size:20px;
    }  
  
`

const NomeHabito = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
  img{
        margin-right:10px;
        margin-top:10px;
        width:13px;
        height: 13px;
    }

`

const Semana = styled.div`
     margin-top:10px;
    display: flex;
    justify-content: flex-start;
`

const Dias = styled.div`
    margin-left:10px;
    width: 30px;
    height: 30px;
    display:flex;
    align-items: center;
    justify-content:center;
    border: 1px solid #D4D4D4;
    border-radius: 5px; 
    font-size: 18px;
    color:#DBDBDB;
    
`