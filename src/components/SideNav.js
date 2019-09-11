import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon, Avatar } from "antd";
import styled from '@emotion/styled'
import { Card } from 'antd';
import { ReactComponent as Maccabi } from "../images/maccabi-haifa-logo.svg";
import ResStats from './dumb/resStats';
import StatsCard from './dumb/StatsCard'
import DivisionCard from './dumb/DivisionCard'
import PlayerCard from './dumb/PlayerCard'
import GameCard from './dumb/GameCard'
import VideoCard from './dumb/VideoCard'
import { Title, CardStyled, SubTitle } from "./dumb/styled/Header";

const { Meta } = Card;
const { Sider } = Layout;
export default function SideNav() {

    const CardContainer = styled.div`
    display: flex; align-items: center; flex-direction: column; padding: 20px 0;
    `;

    const SiderWithOveflow = styled(Sider)`
    overflow: 'auto';
`

    return (
        <SiderWithOveflow width={500} style={{ overflow: 'auto' }} >
            <CardContainer>
                <StatsCard win={40} tie={10} lost={2} divisionTitle={2} />
                {/* <DivisionCard divisionTitle={2} /> */}
                <PlayerCard />
                <VideoCard videoid={206450955} />
                <GameCard />
            </CardContainer>
        </SiderWithOveflow  >)
}


{/* <Link to="/notHome">not home</Link>
<span>|</span>
<Link to="/">home</Link> */}