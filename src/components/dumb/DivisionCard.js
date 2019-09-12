import React from 'react'
import { Slider, Row, Col } from 'antd'
import { Title, CardStyled } from "./styled/Header";
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



const DivisionCard = props => (
    <CardStyled title={<Title>Division</Title>} style={{ width: 450 }}>
        <Row>

            <Col span={6}>
                <img style={{ width: "70px", height: "70px" }} src={`https://www.easports.com/iframe/fifa17proclubs/bundles/fifa/dist/images/division-crests/DivisionCrest${props.divisionTitle}.png`}></img>
            </Col>
            <Col span={18}>
                <Slider max={10} marks={marks} included={false} defaultValue={props.divisionTitle} />
            </Col>
        </Row>
    </CardStyled>
)

export default DivisionCard;