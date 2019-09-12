import React from "react";
import { Title, CardStyled, SubTitle } from "./styled/Header";
import { ReactComponent as Maccabi } from "../../images/maccabi-haifa-logo.svg";
import ResStats from './resStats';
import PlayerStatDetailed from './PlayerStatDetailed'
import { Card, Row, Col, Divider, Button } from 'antd';



const TitleWithButton = () => (
    <Title>
        <Row gutter={16}>
            <Col span={18}>
                Game Players Stats
            </Col>

        </Row>


    </Title>
)



const PlayerCardDetailed = ({ win, lost, tie }) => (
    <CardStyled title={<TitleWithButton />} style={{ width: "40vw", }}>
        <Card.Grid style={{ width: '100%', overflow: "auto", height: "45vh" }}>
            <PlayerStatDetailed />
            <Divider />
            <PlayerStatDetailed />
            <Divider />
            <PlayerStatDetailed />
            <Divider />
            <PlayerStatDetailed />
            <Divider />
            <PlayerStatDetailed />
            <Divider />
            <PlayerStatDetailed />
            <Divider />
            <PlayerStatDetailed />
        </Card.Grid>
    </CardStyled >
)

export default PlayerCardDetailed;