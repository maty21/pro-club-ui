import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import SideNav from '../components/SideNav'
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import Stats from '../components/Stats';
const { Header, Content, Footer, Sider } = Layout;
const Home = () => (
    <p>i am home</p>
);

const NotHome = () => (
    <p>i am not home</p>
);

const Routing = () => (
    <Layout style={{
        minHeight: "100vh",

        fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen;"
    }}
    >
        <SideNav />
        <Content>
            <Switch>
                <Route exact path="/" component={Stats} />
                <Route exact path="/notHome" component={NotHome} />
            </Switch>
        </Content>
    </Layout>
);

export default Routing