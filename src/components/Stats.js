import React, { useState } from "react";
import { ResponsiveLine } from "@nivo/line";
import { stub } from "./stub";
import { Tabs } from "antd";
//import { LiveEvents, LiveEvent, Field2D, Field3D, PlayerDetails, GameStats, TeamsTable, FieldPlay } from 'sport-stats';// make sure parent container have a defined height when using
import Field3D from "./soccer/3d/Field3D";
import GameStats from './soccer/gameStats/GameStats'
import styled from "styled-components";
import { Layout, Menu, Breadcrumb } from "antd";
import PlayerDetails from "./soccer/playerDetails/playerDetatils";
import { Modal, Button } from "antd";
import { Row, Col } from 'antd';
const { Header, Content, Footer } = Layout;
export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const FlexBoxCol = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

export const FlexBoxRow = styled.div`
  display: flex;
  align-items: strech;
  justify-content: flex-start;
  flex-direction: row;
`;

export const FlexBoxWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  font-weight: bold;
  text-align: center;
  width: 100%;
`;

const { TabPane } = Tabs;

export default function Stats({ data /* see data tab */ }) {
  const [playerData, onPlayerClick] = useState({
    showModal: false,
    shouldUpdate: false,
    playerData: {},
    playerStateData: {},
    playerBioData: {}
  });
  const [visible, _showModal] = useState(false);
  const showModal = () => {
    _showModal({
      visible: true
    });
  };

  const handleOk = e => {
    console.log(e);
    onPlayerClick({
      showModal: false,
      shouldUpdate: false,
      playerData: {},
      playerStateData: {},
      playerBioData: {}
    });
  };

  const handleCancel = e => {
    console.log(e);
    _showModal({
      visible: false
    });
  };

  const playerClick = player => {
    console.log("here");
    let localPlayerData = player;
    if (!player.faceImgUrl) {
      if (player.teamId === 1) {
        localPlayerData = this.homeTeam.players.filter(
          tPlayer => tPlayer.id === player.id
        )[0];
      } else {
        localPlayerData = this.awayTeam.players.filter(
          tPlayer => tPlayer.id === player.id
        )[0];
      }
    }
    // showModal();
    onPlayerClick({
      showModal: true,
      shouldUpdate: false,
      playerData: localPlayerData,
      playerBioData: {
        Age: "29",
        Height: "1.85 cm",
        Weight: "73 kg",
        Nationality: "German"
      },
      playerStateData: {
        "Total Goals": "1",
        "Goal Assists": "1",
        "Shots On Target": "3",
        "Total Shots": "3",
        "Fouls Committed": "1",
        "Fouls Suffered": "2",
        "Red Cards": "0",
        "Yellow Cards": "1"
      }
    });
  };

  return (
    <Layout>
      <Header>
        <div>asdadsadadsd</div>
      </Header>

      <Modal
        title="Player Stats"
        visible={playerData.showModal}
        onOk={handleOk}
        onCancel={handleOk}
        footer={[]}
      >
        <PlayerDetails
          player={playerData.playerData}
          bio={playerData.playerBioData}
          stats={playerData.playerStateData}
        />
      </Modal>

      <Row>
        <Tabs defaultActiveKey="1">
          <TabPane
            tab={
              <span>
                <pre>
                  <img
                    src="/textures/team1.png"
                    style={{ width: "20px", height: "20px" }}
                  ></img>{" "}
                  Maccabi Haifa -{" "}
                  <img
                    src="/textures/team2.png"
                    style={{ width: "20px", height: "20px" }}
                  ></img>{" "}
                  Hapoel
                </pre>
              </span>
            }
            key="1"
          >
            <Row>
              <Col span={12}>
                <Field3D
                  field={stub.soccerField}
                  homeTeam={stub.homeTeam}
                  awayTeam={stub.awayTeam}
                  onPlayerClick={data => playerClick(data)}
                />
              </Col>
              <Col span={2} />
              <Col span={10}>
                <div style={{ display: 'flex' }}>
                  <GameStats stats={stub.gameStats} homePlayers={stub.homeTeam.players} awayPlayers={stub.awayTeam.players} onPlayerClick={data => playerClick(data)} fieldTextureUrl="/textures/soccer-field.svg" possesionData={stub.possesionData} />

                </div>

              </Col>
            </Row>



          </TabPane>
          <TabPane tab="Tab 1" key="2">
            <Field3D
              field={stub.soccerField}
              homeTeam={stub.homeTeam}
              awayTeam={stub.awayTeam}
              onPlayerClick={data => playerClick(data)}
            />
          </TabPane>
        </Tabs>
      </Row>
    </Layout>
  );
}
