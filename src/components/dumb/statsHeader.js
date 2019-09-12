
import React from 'react';
import { Row } from 'antd'
import { TitleWhite } from './styled/Header'
const StatsHeader = () => (
    <Row type="flex" justify="start">
        <img
            src="/textures/team1.png"
            style={{ width: "20px", height: "20px" }}
        ></img>{" "}
        <TitleWhite>Maccabi Haifa -{" "}</TitleWhite>

        <img
            src="/textures/team2.png"
            style={{ width: "20px", height: "20px" }}
        ></img>{" "}
        <TitleWhite> Hapoel</TitleWhite>

    </Row>
)


export default StatsHeader