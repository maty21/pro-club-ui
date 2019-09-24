import React from "react";
import { Title, CardStyled, SubTitle } from "./styled/Header";
import { ReactComponent as Maccabi } from "../../images/maccabi-haifa-logo.svg";
import ResStats from '../dumb/resStats';
import { Card, Slider, Row, Col, Divider } from 'antd';
const { Meta } = Card;

const marks = {
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: '10'
};


const StatsCard = ({ win, lost, tie, divisionTitle }) => (
    <CardStyled title={<Title>Info</Title>} >
        <Row type="flex" justify="space-between">
            <Col span={20}>
                <Meta
                    avatar={
                        <Maccabi style={{ width: '30px', height: '30px' }} />
                    }
                    title={<SubTitle style={{ padding: '4px' }}>Maccabi Haifa</SubTitle>}
                />
                <ResStats win={win} tie={tie} lost={lost} />
            </Col>
            <Col span={4}>
                <img style={{ width: "70px", height: "70px" }} src={`https://www.easports.com/iframe/fifa17proclubs/bundles/fifa/dist/images/division-crests/DivisionCrest${divisionTitle}.png`}></img>
            </Col>

        </Row>
    </CardStyled>
)

export default StatsCard;