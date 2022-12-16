import logo from "../Assets/TrackIt.png";
import { Header, FotoUsuario } from "./Styles/TopoStyle";
import UsuarioContext from "../Context/UsuarioContext";
import { useContext } from "react";

export default function Topo() {
    const {usuarioLogado} = useContext(UsuarioContext)

    return (
        <Header>            
                <img src={logo} />
                <FotoUsuario src={usuarioLogado.image}></FotoUsuario>            
        </Header>
    )
}

