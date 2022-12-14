import styled from "styled-components";

export const Container = styled.div`
min-width:375px;
height: 670px;
display: flex;
flex-direction: column;
align-items: center;
background-color: #E5E5E5;
`
export const MeusHabitos = styled.div`    
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
button {
    margin-right: 18px;
    text-align: center;
    background-color: #52B6FF;
    border:none;
    border-radius:5px;
    width:39px;
    height: 35px;
    color: #FFFFFF;
    font-size:25px;
}
`

export const Text = styled.div`
margin-top:25px;
max-width:340px;
color: #666666;
font-weight: 400;
font-size: 15px;
line-height: 22px;
text-align: justify;

`