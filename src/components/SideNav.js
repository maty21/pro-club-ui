import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout } from "antd";
import styled from '@emotion/styled'
import { Card } from 'antd';
import StatsCard from './dumb/StatsCard'
import PlayerCard from './dumb/PlayerCard'
import GameCard from './dumb/GameCard'
import VideoCard from './dumb/VideoCard'
import { Title, CardStyled, SubTitle } from "./dumb/styled/Header";
import { useSelector } from 'react-redux';
const { Meta } = Card;
const { Sider } = Layout;
export default function SideNav() {
    // const { results } = useSelector(state => state.results);
    const CardContainer = styled.div`
    display: flex; align-items: center; flex-direction: column; padding: 20px 0;
    `;

    const SiderWithOverflow = styled(Sider)`
    overflow: 'auto';
`

    return (
        <SiderWithOverflow width={500} style={{ overflow: 'auto' }} >
            <CardContainer>
                <StatsCard win={40} tie={10} lost={2} divisionTitle={2} />
                {/* <DivisionCard divisionTitle={2} /> */}
                <PlayerCard />
                <VideoCard videoid={206450955} />
                <GameCard />
            </CardContainer>
        </SiderWithOverflow  >)
}


{/* <Link to="/notHome">not home</Link>
<span>|</span>
<Link to="/">home</Link> */}