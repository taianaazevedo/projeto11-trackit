import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
import { Tela, Login } from "./styles";

export default function TelaLogin() {
    return (
        <Tela>
            <img src={logo}></img>
            <form>
                <Login>
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="senha" />
                </Login>
                <button>Entrar</button>
            </form>
            <Link to="/cadastro">
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </Tela>
    )
}

