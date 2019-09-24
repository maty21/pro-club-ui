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

const PlayerCard = ({ players }) => {
    const playersStats = players.filter(p => Object.keys(p).find(k => k === "gamesPlayed")).map(p => <div>
        <PlayerStat stats={p} />
        <Divider />
    </div>)

    return (
        <CardStyled title={<TitleWithButton />} >
            <Card.Grid style={{ width: '100%', overflow: "auto", height: "16vh", padding: "1px" }}>
                {playersStats}
            </Card.Grid>
        </CardStyled>
    )
}

export default PlayerCard;