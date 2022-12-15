import styled from "styled-components"

export const TelaHoje = styled.div`
    width:100%;
    height: 900px;
    margin-left: auto;
    margin-right:auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #E5E5E5;

`
export const Dia = styled.div`
    margin-top:100px;
    margin-left: 20px;
    width:375px;
    h1{
        color: #126BA5;
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
    }
    p{
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #BABABA;
    }
`
export const CardHabito = styled.div`
    width:355px;
    height: 95px;
    margin-top:20px;
    background-color: #FFFFFF;
    border-radius:10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
export const Descricao = styled.div`
    width:208px;   
    h1{  
        font-size: 19px;
        line-height: 25px;
        color: #666666;
    }
    p{
        font-size: 15px;
        line-height: 16px;
        color: #666666;
    }
`
export const CheckBox = styled.div`
    width:69px;
    height: 69px;
    border-radius:10px;
    background-color:#EBEBEB;
    display: flex;
    align-items: center;
    justify-content: center;
`