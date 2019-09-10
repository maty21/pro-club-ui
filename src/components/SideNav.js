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

import { Title, CardStyled, SubTitle } from "./dumb/styled/Header";
const { Meta } = Card;
const { Sider } = Layout;
export default function SideNav() {

    const CardContainer = styled.div`
display: flex; justify-content: space-around; padding: 30px;flex-direction:column;height:100vh;`;


    return (
        <Sider width={500}  >
            <CardContainer>
                <StatsCard win={40} tie={10} lost={2} divisionTitle={2} />
                {/* <DivisionCard divisionTitle={2} /> */}
                <PlayerCard />
                <GameCard />
                <PlayerCard />
            </CardContainer>
        </Sider >)
}


{/* <Link to="/notHome">not home</Link>
<span>|</span>
<Link to="/">home</Link> */}