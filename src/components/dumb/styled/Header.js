import styled from "styled-components";
import { Card, Col } from 'antd'


export const TitleWhite = styled.div`
font-family: 'Bungee', cursive;
color: #fffefe8f;`


export const Title = styled.div`
font-family: 'Bungee', cursive;
color: #74d4f3;
font-style: italic;
`
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
margin-bottom: 20px;
width:90%;
`


export const CardStyledVideo = styled(CardStyled)` 
font-size:12px;
color: #3cc39f;
:hover {
    border-color: #74d4f3;
    border-width:1px;
    border-style:dashed;
    border-radius: 10px;
  }
`
export const Name = styled(Col)`
    border-style: dashed;
    border-width: 0 2px 0 0px;
    padding-right: 10px;
`

export const HeaderScreen = styled(Title)`
    padding-right: 2.5em;
    font-size: 35px;
    padding-top: 0.5em;
    padding-left: 2.5em;
    font-style: italic;
    padding-bottom: 0.3em;
    border-bottom: #c3d2d2;
    border-style: dashed;
    border-width: 0 0 3px 0;
`
export const Goals = styled(Col)`
       padding-left: 10px;
`
