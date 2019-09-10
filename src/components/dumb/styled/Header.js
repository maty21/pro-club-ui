import styled from "styled-components";
import { Card, Col } from 'antd'


export const TitleWhite = styled.div`
font-family: 'Bungee', cursive;
color: #fffefe8f;`


export const Title = styled.div`
font-family: 'Bungee', cursive;
color: #74d4f3;`

export const SubTitle = styled(Title)`
font-size:13px;
color: #8bca8b;
`

export const SubTitleRed = styled(SubTitle)`
color: #EF767A;
`
export const CardStyled = styled(Card)`
background: rgb(37, 39, 39);
border-radius: 10px;

`
export const Name = styled(Col)`
    border-style: dashed;
    border-width: 0 2px 0 0px;
    padding-right: 10px;
`
export const Goals = styled(Col)`
       padding-left: 10px;
`
