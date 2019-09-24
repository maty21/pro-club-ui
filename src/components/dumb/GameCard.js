import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
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
            {/* <Col span={2}>
                <Button type="primary" ghost>Extra</Button>
            </Col> */}
        </Row>


    </Title>
)
const WinOrLoss = result => result.status === "win" ?
    <SubTitle>{result.goal} - {result.goalsAgainst} </SubTitle> :
    <SubTitleRed>  {result.goal} - {result.goalsAgainst}</SubTitleRed>

const GameCard = ({ games = [] }) => {

    const GameDetails = games.map(g =>
        <div>
            <Row type="flex" justify="start">
                <Name span={16}>
                    <StatsHeader teams={g} />
                </Name>
                <Col span={4}>
                    <Row type="flex" justify="center">
                        {WinOrLoss(g.result)}
                    </Row>
                </Col>
                <Col span={2}>
                    <Title>
                        <Link to={`/games/${g.matchId}`}>
                            <Button type="primary" ghost >View </Button>
                        </Link>
                    </Title>
                </Col>
            </Row>
            <Divider />
        </div>
    )

    return (
        <CardStyled title={<TitleWithButton />} >
            <Card.Grid style={{ width: '100%', overflow: "auto", height: "16vh" }}>
                {GameDetails}
            </Card.Grid>
        </CardStyled>
    )
}

export default GameCard;