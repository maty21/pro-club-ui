import React, { useState } from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import styled, { createGlobalStyle } from "styled-components";
import AppStatus from "./AppStatus";
import { ReactComponent as JoieLogo } from "../images/maccabi-haifa-logo.svg";
import Stats from "./Stats";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const FlexBox = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const IconLogo = styled(Icon)`
  && {
    margin-bottom: 10px;
    font-size: 81px;
  }
`;
const Title = styled.div`
  && {
    margin-left: 10px;
    color: green;
    font-size: 22px;
  }
`;

const GlobalStyle = createGlobalStyle`
  * {
    font-family:' -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen'
    
  }
`;
export default function SiderLayout() {
  const [collapsed, onCollapse] = useState(false);
  // state = {
  //     collapsed: false,
  // };

  // onCollapse = collapsed => {
  //     console.log(collapsed);
  //     this.setState({ collapsed });
  // };

  const LL = () => <JoieLogo />;
  return (
    <Layout
      style={{
        minHeight: "100vh",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen;"
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        width={400}
      >
        {/* <FlexBox>
          <IconLogo component={JoieLogo} />
          {!collapsed && <Title>ProClub</Title>}
        </FlexBox>

        <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1">
            <Icon type="user" />
            <span>User stats</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Extras</span>
          </Menu.Item>
        </Menu> */}
      </Sider>
      {/* <Stats /> */}
    </Layout>
  );
}
