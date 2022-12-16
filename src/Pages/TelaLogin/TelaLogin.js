import { Link, useNavigate } from "react-router-dom";
import logo from "../../Assets/logo.png";
import { Tela, Login } from "./styles";
import { useState, useContext } from "react";
import axios from "axios";
import UsuarioContext from "../../Context/UsuarioContext";

export default function TelaLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { usuarioLogado, setUsuarioLogado} = useContext(UsuarioContext);

    function login(e) {
        e.preventDefault();
        const body = { email, password };
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body);
        promise.then((res) => {
            setUsuarioLogado(res.data);           
            navigate("/hoje");
        });
        promise.catch((err) => alert(err.response.data.message))

    }


    return (
        <Tela>
            <img src={logo}></img>
            <form onSubmit={login}>
                <Login>
                    <input type="email" placeholder="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="senha" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                </Login>
                <button type="submit">Entrar</button>
            </form>
            <Link to="/cadastro">
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </Tela>
    )
}

