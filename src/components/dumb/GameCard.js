import React from "react";
import { Title, CardStyled, SubTitle, Name, SubTitleRed } from "./styled/Header";
import { ReactComponent as Maccabi } from "../../images/maccabi-haifa-logo.svg";
import ResStats from './resStats';
import StatsHeader from './statsHeader'
import PlayerStat from './PlayerStat'
import { Card, Row, Col, Divider, Button } from 'antd';

const TitleWithButton = () => (
    <Title>
        <Row gutter={16}>
            <Col span={18}>
                Latest Games
            </Col>
            <Col span={2}>
                <Button type="primary" ghost>Extra</Button>
            </Col>
        </Row>


    </Title>
)

const GameCard = ({ win, lost, tie }) => (
    <CardStyled title={<TitleWithButton />} style={{ width: 450, }}>
        <Row type="flex" justify="start">
            <Name span={18}>
                <StatsHeader />
            </Name>
            <Col span={6}>
                <Row type="flex" justify="center">
                    <SubTitle> 5 - 1 </SubTitle>
                </Row>
            </Col>
        </Row>
        <Divider />
        <Row type="flex" justify="start">
            <Name span={18}>
                <StatsHeader />
            </Name>
            <Col span={6}>
                <Row type="flex" justify="center">
                    <SubTitleRed>2 - 3 </SubTitleRed>
                </Row>
            </Col>
        </Row>
    </CardStyled>
)

export default GameCard;