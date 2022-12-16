import { useState, useContext } from "react";
import styled from "styled-components"
import UsuarioContext from "../../Context/UsuarioContext";
import axios from "axios";


export default function BoxHabito({ setMostraCriarHabito }) {
    const dias = ["D", "S", "T", "Q", "Q", "S", "S"];
    const [nomeHabito, setNomeHabito] = useState("");
    const [diaSelecionado, setDiaSelecionado] = useState([]);
    const { usuarioLogado } = useContext(UsuarioContext);



    function selecionaDia(i) {
        if (!diaSelecionado.includes(i)) {
            const listaDias = [...diaSelecionado, i];
            setDiaSelecionado(listaDias);
            console.log(listaDias)
            return;
        } else {
            const filtraDias = diaSelecionado.filter((d) => !(d === i));
            setDiaSelecionado([...filtraDias]);
            console.log(filtraDias)
            return;
        }
    }

    function cancelar() {
        setMostraCriarHabito(false);
    }

    function enviarHabito(e) {
        e.preventDefault()
        const body = { name: nomeHabito, days: diaSelecionado };
        const config = {
            headers: {
                Authorization: `Bearer ${usuarioLogado.token}`
            }
        }
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, config);
        promise.then((res) => {
            cancelar();
            alert("Hábito registrado!");
        });
        promise.catch((erro) => alert("Por favor, tente novamente"));

    }


    return (
        <AddHabito onSubmit={enviarHabito}>
            <input placeholder="nome do hábito" required value={nomeHabito} onChange={(e) => setNomeHabito(e.target.value)}></input>
            <Semana>
                {dias.map((dia, i) => (
                    <Dia key={i}
                        selecionado={diaSelecionado.includes(i)}
                        onClick={() => selecionaDia(i)}
                    >{dia}
                    </Dia>))}
            </Semana>
            <Botoes>
                <Cancelar onClick={cancelar}>Cancelar</Cancelar>
                <Salvar type="submit">Salvar</Salvar>
            </Botoes>
        </AddHabito>
    )
}

const AddHabito = styled.form`
    width: 340px;
    height: 180px;
    margin-top: 15px;
    background: #FFFFFF;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    
    input{
        margin-top:15px;
        margin-left:auto;
        margin-right: auto;
        width:310px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 8px;
        &::placeholder{
        color:#DBDBDB;
        font-size:15px;
        }
    }
    
`
const Semana = styled.div`
    margin-top:10px;
    display: flex;
    justify-content: flex-start;
`

const Dia = styled.div`
    margin-left:10px;
    width: 30px;
    height: 30px;
    display:flex;
    align-items: center;
    justify-content:center;
    background: ${props => props.selecionado ? "#CFCFCF" : "#FFFFFF"};
    border: 1px solid #D4D4D4;
    border-radius: 5px; 
    font-size: 18px;
    line-height: 25px;
    cursor:pointer;
    color: ${props => props.selecionado ? "#FFFFFF" : "#DBDBDB"};
`

const Botoes = styled.li`
    display: flex;
    justify-content: flex-end;
`
const Cancelar = styled.button`
    width:84px;
    height: 35px;
    margin-top:25px;
    margin-right:10px;
    border:none;
    background-color: #FFFFFF;
    color:#52B6FF;
   
`
const Salvar = styled.button`
    width:84px;
    height: 35px;
    margin-top:25px;
    margin-right:10px;
    
    width: 84px;
    height: 35px;
    background: #52B6FF;
    border-radius: 10px;
    border:none;
    color:#FFFFFF;
`