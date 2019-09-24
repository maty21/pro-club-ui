import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import SideNav from '../components/SideNav'
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import Stats from '../components/StatsContainer';
import Videos from '../components/Videos'

import { useDispatch } from 'react-redux'
import useInterval from '../store/hooks/useInterval'
import { getResult } from '../store/actions/getResults.action'
const { Header, Content, Footer, Sider } = Layout;


const Home = () => (
    <p>i am home</p>
);

const NotHome = () => (
    <p>i am not home</p>
);

const Routing = () => {
    const dispatch = useDispatch();
    dispatch(getResult())
    useInterval(() => {
        dispatch(getResult())
        console.log('timer')
    }, 1000000)


    return (
        <Layout style={{
            height: '100vh',
            fontFamily:
                "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen;"
        }}
        >
            <SideNav />
            <Content>
                <Switch>
                    <Route exact path="/" component={Stats} />
                    <Route exact path="/games/:gameId" component={Stats} />
                    <Route exact path="/videos" component={Videos} />
                    <Route exact path="/notHome" component={NotHome} />
                </Switch>
            </Content>
        </Layout>
    )
};

export default Routing