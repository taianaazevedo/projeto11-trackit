import styled from "styled-components";
import logo from "../../Assets/logo.png"

export default function TelaLogin(){
    return (
        <Tela>
           <img src={logo}></img>
           <form>
            <Login>
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="senha"/>
            </Login>
            <button>Entrar</button>
           </form>
        </Tela>
    )
}

const Tela = styled.div`
    min-width:375px;
    max-width:600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        margin-top:70px;
    }
    button{
        margin-top: 10px;
    }

`
const Login = styled.div`
    display: flex; 
    flex-direction: column;
    input {
        margin-top: 10px;
    }
  
`