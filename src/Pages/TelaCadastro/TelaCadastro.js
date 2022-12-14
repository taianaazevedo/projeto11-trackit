import logo from "../../Assets/logo.png";
import {Tela, Login} from "./styles";

export default function TelaLogin() {
    return (
        <Tela>
            <img src={logo}></img>
            <form>
                <Login>
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="senha" />
                    <input type="name" placeholder="nome" />
                    <input type="url" placeholder="foto" />
                </Login>
                <button>Entrar</button>
            </form>            
            <p>Já tem uma conta? Faça login!</p>           
        </Tela>
    )
}

