import styled from "styled-components"

export default function Historico() {
    return (
        <Container>
            <TelaHistorico>
                <p>Seu histórico</p>
            </TelaHistorico>
            <Text>Em breve, você poderá ver o histórico dos seus hábitos aqui!</Text>
        </Container>
    )

}

const Container = styled.div`
    min-width:375px;
    height: 670px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #E5E5E5;
`
const TelaHistorico = styled.div`
    margin-top:100px;
    width:375px;
    display:flex;
    align-items: center;
    justify-content: space-between;    
        p{
            color:#126BA5;
            font-size:23px;
            margin-left:18px;
        }
`
const Text = styled.div`
margin-top:25px;
max-width:340px;
color: #666666;
font-weight: 400;
font-size: 15px;
line-height: 22px;
text-align: justify;

`