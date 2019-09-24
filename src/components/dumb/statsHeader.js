
import React from 'react';
import { Row } from 'antd'
import { TitleWhite } from './styled/Header'
const StatsHeader = ({ teams = {} }) => (
    <Row type="flex" justify="start">
        <img
            src="/textures/team1.png"
            style={{ width: "20px", height: "20px" }}
        ></img>{" "}
        <TitleWhite style={{ fontSize: "12px" }}>{teams && teams.team} -{" "}</TitleWhite>

        <img
            src="/textures/team2.png"
            style={{ width: "20px", height: "20px" }}
        ></img>{" "}
        <TitleWhite style={{ fontSize: "12px" }}> {teams && teams.opponent}</TitleWhite>

    </Row>
)


export default StatsHeader