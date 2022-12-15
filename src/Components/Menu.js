import { NavMenu, Habitos, Hoje, Historico } from "./Styles/MenuStyle";
import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <NavMenu>
            <Link to="/habitos">
                <Habitos>Hábitos</Habitos>
            </Link>
            <Link to="/hoje">
                <Hoje>Hoje</Hoje>
            </Link>
            <Link to="/historico">
                <Historico>Histórico</Historico>
            </Link>
        </NavMenu>
    )
}

