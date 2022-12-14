import styled from "styled-components"

export const Tela = styled.div`
    min-width:375px;
    height: 670px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:#FFFFFF;
    p{
        color:#52B6FF;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        text-decoration: underline;
        margin-top: 25px;
        cursor: pointer;
    }
    img {
        margin-top:80px;
        width:180px;
        height: 180px;
    }
    button{
        margin-top: 10px;
        background-color: #52B6FF;
        color:#FFFFFF;
        width:300px;
        height: 45px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

`
export const Login = styled.div`
    display: flex; 
    flex-direction: column;
    input {
        margin-top: 10px;
        width:300px;
        height: 45px;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
    }
  
`