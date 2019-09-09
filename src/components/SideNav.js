import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon, Avatar } from "antd";
import styled from '@emotion/styled'
import { Card } from 'antd';
import { ReactComponent as Maccabi } from "../images/maccabi-haifa-logo.svg";
import ResStats from './dumb/resStats';
const { Meta } = Card;
const { Sider } = Layout;

export default function SideNav() {

    const CardContainer = styled.div`
display: flex; justify-content: center; padding: 30px;
`;


    return (
        <Sider
            width={500}
        >
            <CardContainer>

                <Card title="Info" style={{ width: 450, background: '#00000038' }}>
                    <Meta
                        avatar={
                            <Maccabi style={{ width: '30px', height: '30px' }} />
                        }
                        title="Maccabi Haifa"


                    />
                    <ResStats />
                </Card>
            </CardContainer>
        </Sider >)
}


{/* <Link to="/notHome">not home</Link>
<span>|</span>
<Link to="/">home</Link> */}