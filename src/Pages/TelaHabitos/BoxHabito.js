import styled from "styled-components"


export default function BoxHabito({cancelaCriarHabito}) {
    const dias = ["S", "T", "Q", "Q", "S", "S", "D"];

    function cancelar() {
        cancelaCriarHabito(false);
    }

    return (
        <AddHabito>
            <input placeholder="nome do hábito"></input>
            <div>{dias.map((d) => <Dia>{d}</Dia>)}</div>
            <Botoes>
                <Cancelar onClick={cancelar}>Cancelar</Cancelar>
                <Salvar>Salvar</Salvar>
            </Botoes>
        </AddHabito>
    )
}

const AddHabito = styled.div`
    width: 340px;
    height: 180px;
    margin-top: 15px;
    background: #FFFFFF;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    
    input{
        margin-top:10px;
        margin-left:auto;
        margin-right: auto;
        width:310px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 10px;
        &::placeholder{
        color:#DBDBDB;
    }
    }
    div{
        display: flex;
        margin-top:5px;
        width: 290px;
        margin-left:auto;
        margin-right: auto;
        
    }
    
`
const Dia = styled.div`
    width: 30px;
    height: 30px;
    margin-left: 5px;
    display:flex;
    align-items: center;
    justify-content:center;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px; 
    font-size: 18px;
    line-height: 25px;
    color: #DBDBDB;
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