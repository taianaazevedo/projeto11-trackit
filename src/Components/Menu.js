import { NavMenu, Habitos, Hoje, Historico } from "./Styles/MenuStyle"

export default function Menu(){
    return (
        <NavMenu>
            <Habitos>Hábitos</Habitos>
            <Hoje>Hoje</Hoje>
            <Historico>Histórico</Historico>
        </NavMenu>
    )
}

