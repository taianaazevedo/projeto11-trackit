import logo from "../Assets/TrackIt.png";
import foto from "../Assets/fotoFake.png";
import { Header } from "./Styles/TopoStyle";

export default function Topo() {
    return (
        <Header>            
                <img src={logo} />
                <img src={foto} />            
        </Header>
    )
}

