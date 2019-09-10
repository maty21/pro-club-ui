import React from "react";
import { Title, CardStyled, SubTitle } from "./styled/Header";
import { ReactComponent as Maccabi } from "../../images/maccabi-haifa-logo.svg";
import ResStats from './resStats';
import PlayerStat from './PlayerStat'
import { Card, Row, Col, Divider, Button } from 'antd';

const TitleWithButton = () => (
    <Title>
        <Row gutter={16}>
            <Col span={18}>
                Players Stats
            </Col>
            <Col span={2}>
                <Button type="primary" ghost>Extra</Button>
            </Col>
        </Row>


    </Title>
)

const PlayerCard = ({ win, lost, tie }) => (
    <CardStyled title={<TitleWithButton />} style={{ width: 450, }}>
        <PlayerStat />
        <Divider />
        <PlayerStat />
    </CardStyled>
)

export default PlayerCard;