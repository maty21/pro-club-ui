import React from "react";
import { Title, CardStyled, SubTitle } from "./styled/Header";
import { ReactComponent as Maccabi } from "../../images/maccabi-haifa-logo.svg";
import ResStats from './resStats';
import { Card, Row, Col } from 'antd';
import styled from '@emotion/styled'

const Name = styled(Col)`
    border-style: dashed;
    border-width: 0 2px 0 0px;
    padding-right: 10px;
`
const Goals = styled(Col)`
       padding-left: 10px;
`


const PlayerStat = ({ stats }) => (
    <Row>
        <Col span={3}>
            <img style={{ width: "40px", height: "40px" }} src={`https://www.easports.com/iframe/fifa17proclubs/bundles/proclubs/dist/images/default_avatar.png`}></img>
        </Col>
        <Name span={12}>
            <Row>
                <Title style={{ color: '#93de99' }}>MiddleFilder</Title>
            </Row>
            <Row style={{ fontSize: '14px' }}>
                <Title style={{ color: '#fffefe8f' }}>
                    carlos valderamma
                </Title>
            </Row>
        </Name>
        <Goals span={3}>
            <Row>
                <Title>Gls</Title>
            </Row>
            <Row>
                5
             </Row>
        </Goals>
        <Col span={3}>
            <Row>
                <Title>Ass</Title>
            </Row>
            <Row>
                8
                </Row>
        </Col>
        <Col span={3}>
            <Row>
                <Title>Rating</Title>
            </Row>
            <Row>
                7.10
                </Row>
        </Col>

    </Row>

)

export default PlayerStat;