import { useState } from "react";
import logo from "../../Assets/logo.png";
import { Tela, Login } from "./styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function TelaLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate();

    function cadastrar(e) {
        e.preventDefault();
        const body = { email, password, image, name };
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", body);
        promise.then((res) => {
            alert("Cadastro realizado!");
            navigate("/");
        });
        promise.catch((err) => console.log(err.response.data))

    }

    return (
        <Tela>
            <img src={logo}></img>
            <form onSubmit={cadastrar}>
                <Login>
                    <input type="email" placeholder="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="senha" required value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input type="name" placeholder="nome" required value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="url" placeholder="foto" required value={image} onChange={(e) => setImage(e.target.value)} />
                </Login>
                <button type="submit">Cadastrar</button>
            </form>
            <p>Já tem uma conta? Faça login!</p>
        </Tela>
    )
}

