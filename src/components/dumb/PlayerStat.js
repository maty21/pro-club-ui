import React from "react";
import { Title, CardStyled, SubTitle, Name, Goals } from "./styled/Header";
import { ReactComponent as Maccabi } from "../../images/maccabi-haifa-logo.svg";
import ResStats from './resStats';
import { Card, Row, Col } from 'antd';
import styled from '@emotion/styled'



const PlayerStat = ({ stats }) => (
    <Row>
        <Col span={3}>
            <img style={{ width: "40px", height: "40px" }} src={`https://www.easports.com/iframe/fifa17proclubs/bundles/proclubs/dist/images/default_avatar.png`}></img>
        </Col>
        <Name span={12}>
            <Row>
                <Title style={{ color: '#93de99' }}>{stats.favoritePosition}</Title>
            </Row>
            <Row style={{ fontSize: '11px' }}>
                <Title style={{ color: '#fffefe8f' }}>
                    {stats.name} ({stats.proName})
                </Title>
            </Row>
        </Name>
        <Goals span={3}>
            <Row>
                <Title>Gms</Title>
            </Row>
            <Row>
                {stats.gamesPlayed}
            </Row>
        </Goals>
        <Col span={3}>
            <Row>
                <Title>Ass</Title>
            </Row>
            <Row>
                {stats.assists}
            </Row>
        </Col>
        <Col span={3}>
            <Row>
                <Title>Gls</Title>
            </Row>
            <Row>
                {stats.goals}
            </Row>
        </Col>

    </Row>

)

export default PlayerStat;