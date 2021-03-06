import React from "react";
import { Title, CardStyled, SubTitle, Name, Goals } from "./styled/Header";
import { ReactComponent as Maccabi } from "../../images/maccabi-haifa-logo.svg";
import ResStats from './resStats';
import { Card, Row, Col } from 'antd';
import styled from '@emotion/styled'



const PlayerStatDetailed = ({ stats }) => (
    <Row >
        <Col span={2}>
            <img style={{ width: "40px", height: "40px" }} src={`https://www.easports.com/iframe/fifa17proclubs/bundles/proclubs/dist/images/default_avatar.png`}></img>
        </Col>
        <Name span={7}>
            <Row>
                <Title style={{ color: '#93de99' }}>MiddleFilder</Title>
            </Row>
            <Row style={{ fontSize: '14px' }}>
                <Title style={{ color: '#fffefe8f' }}>
                    {stats.playername}
                </Title>
            </Row>
        </Name>
        <Goals span={2}>
            <Row>
                <Title>Gls</Title>
            </Row>
            <Row>
                {stats.goals}
            </Row>
        </Goals>
        <Col span={2}>
            <Row>
                <Title>Ass</Title>
            </Row>
            <Row>
                {stats.assists}
            </Row>
        </Col>
        <Col span={2}>
            <Row>
                <Title>Tkl</Title>
            </Row>
            <Row>
                {stats.tacklesmade}/{stats.tackleattempts}
            </Row>
        </Col>
        <Col span={2}>
            <Row>
                <Title>Pass</Title>
            </Row>
            <Row>
                {stats.passesmade}/{stats.passattempts}
            </Row>
        </Col>
        <Col span={2}>
            <Row>
                <Title>Sht</Title>
            </Row>
            <Row>
                {stats.shots}
            </Row>
        </Col>
        <Col span={3}>
            <Row>
                <Title>Rating</Title>
            </Row>
            <Row>
                {stats.rating}
            </Row>
        </Col>

    </Row>

)

export default PlayerStatDetailed;