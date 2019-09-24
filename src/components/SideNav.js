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
    const results = useSelector(state => {
        if (state.results && state.results.mixer.length > 0 && state.results.ea) {
            return state.results
        }
    });
    const CardContainer = styled.div`
    display: flex; justify-content:space-around; align-items: center; flex-direction: column; padding: 20px 0; height:100vh;
    `;

    const SiderWithOverflow = styled(Sider)`
    overflow: 'auto';
   
`
    const getMatches = (matches) => matches.map(m => ({
        matchId: m.matchId,
        result: m.result,
        opponent: m.opponent.data.name,
        team: m.team.data.name,
        details: m
    }))
    const video = results && results.mixer && results.mixer[0] && results.mixer[results.mixer.length - 2];
    const clubData = results && results.ea.clubDetais.stats ? results.ea.clubDetais.stats : { wins: "0", seasons: 0, ties: "0", losses: "0", titlesWon: "0" }
    const players = results && results.ea && results.ea.membersStats ? results.ea.membersStats : []
    const games = results && results.ea && results.ea.matches ? getMatches(results.ea.matches) : []

    return (
        <SiderWithOverflow width={"28vw"} style={{ overflow: 'auto' }} >
            <CardContainer>
                <StatsCard win={clubData.wins} tie={clubData.ties} lost={clubData.losses} divisionTitle={clubData.titlesWon} />
                {/* <DivisionCard divisionTitle={2} /> */}
                <PlayerCard players={players} />
                <VideoCard key={video} video={video} />
                <GameCard games={games} />
            </CardContainer>
        </SiderWithOverflow  >)
}


{/* <Link to="/notHome">not home</Link>
<span>|</span>
<Link to="/">home</Link> */}