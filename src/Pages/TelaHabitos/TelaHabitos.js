import { Container, MeusHabitos, Text } from "./styles";
import BoxHabito from "./BoxHabito";
import { useContext, useState, useEffect } from "react";
import UsuarioContext from "../../Context/UsuarioContext";
import axios from "axios";
import styled from "styled-components";
import lixeira from "../../Assets/lixeira.png"


export default function Habitos() {
    const dias = ["D", "S", "T", "Q", "Q", "S", "S"];
    const [mostraCriarHabito, setMostraCriarHabito] = useState(false);
    const [habito, setHabito] = useState(null);
    const { usuarioLogado } = useContext(UsuarioContext);


    useEffect(() => {
       carregaHabitos()
    }, [])

    if (habito === null) {
        return <div>Carregando...</div>
    }

    function adicionarHabito() {
        setMostraCriarHabito(true);
    }

    function carregaHabitos(){
        const config = {
            headers: {
                Authorization: `Bearer ${usuarioLogado.token}`
            }
        }
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);
        promise.then((res) => setHabito(res.data));
        promise.catch((err) => console.log(err.response.data));
    }


    function deletarHabito(habito){
        if(window.confirm("Você realmente deseja apagar o hábito?")){
            const config = {
                headers: {
                    Authorization: `Bearer ${usuarioLogado.token}`
                }
            }
            const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habito.id}`, config);
            promise.then((res) => {
                carregaHabitos();
            })
            promise.catch((err) => alert("Houve um erro ao deletar o hábito"))
            
        }
    }

    return (
        <Container>
            <MeusHabitos>
                <p>Meus Hábitos</p>
                <button onClick={adicionarHabito}>+</button>
            </MeusHabitos>
            {mostraCriarHabito && <BoxHabito setMostraCriarHabito={setMostraCriarHabito} carregaHabitos={carregaHabitos}/>}

            {habito.map((h) =>
                <CadaHabito key={h.id}>
                    <NomeHabito>
                        <p>{h.name}</p>
                        <img src={lixeira} onClick={() => deletarHabito(h)}/>
                    </NomeHabito>
                    <Semana>
                        {dias.map((d, i) =>
                            <Dias selecionado={h.days.includes(i)}>{d}</Dias>)}
                    </Semana>
                </CadaHabito>)}
                
            {habito.length === 0 && <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text>}
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
    background: ${props => props.selecionado ? "#CFCFCF" : "#FFFFFF"};
    margin-left:10px;
    width: 30px;
    height: 30px;
    display:flex;
    align-items: center;
    justify-content:center;
    border: 1px solid #D4D4D4;
    border-radius: 5px; 
    font-size: 18px;
    color: ${props => props.selecionado ? "#FFFFFF" : "#DBDBDB"};
    
`