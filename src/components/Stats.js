import React, { useState } from "react";
import { withRouter } from 'react-router-dom';

import { stub } from "./stub";
import { Tabs, } from "antd";
//import { LiveEvents, LiveEvent, Field2D, Field3D, PlayerDetails, GameStats, TeamsTable, FieldPlay } from 'sport-stats';// make sure parent container have a defined height when using
import Field3D from "./soccer/3d/Field3D";
import GameStats from "./soccer/gameStats/GameStats";
import styled from "styled-components";
import StatsHeader from "./dumb/statsHeader";
import { Layout, Card } from "antd";
import PlayerDetails from "./soccer/playerDetails/playerDetatils";
import { Modal } from "antd";
import { Row, Col } from "antd";
import { CardStyled, HeaderScreen } from './dumb/styled/Header'
import PlayerCardDetailed from './dumb/PlayerCardDetailed'


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

function Stats({ games, playersPosition, id, playersDetails }) {
  //console.log(gameId);


  const [playerData, onPlayerClick] = useState({
    showModal: false,
    shouldUpdate: false,
    playerData: {},
    playerStateData: [],
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

  const StatsData = () => <Layout >
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

    <Row type="flex" justify="start">
      <Col>
        <HeaderScreen >Stats</HeaderScreen>
      </Col>
    </Row>

    <Row type="flex" justify="center" >
      <CardStyled style={{ marginTop: '1em', width: "71vw", height: "30vh" }}>
        {playersPosition && playersPosition.homeTeam && <Field3D key={id} id={id}
          field={stub.soccerField}
          homeTeam={playersPosition && playersPosition.homeTeam}
          awayTeam={playersPosition && playersPosition.awayTeam}
          onPlayerClick={data => playerClick(data)}
        />}
      </CardStyled>
    </Row>
    <Row type="flex" justify="space-around" >

      <Col   >
        <CardStyled

          style={{ fontSize: "14px", width: 550, }}
          title={
            <div style={{ display: "flex", justifyContent: "center" }}>
              <StatsHeader />
            </div>
          }
        >
          {games && games.gameStats && games.gameStats.length !== 0 && <Card.Grid style={{ width: '100%', overflow: "auto", height: "45vh" }}>
            <GameStats id={id}
              stats={games && games.gameStats && games.gameStats.length === 0 ? stub.gameStats : games.gameStats}
              homePlayers={stub.homeTeam.players}
              awayPlayers={stub.awayTeam.players}
              onPlayerClick={data => playerClick(data)}
              fieldTextureUrl="/textures/soccer-field.svg"
              possesionData={stub.possesionData}
            />
          </Card.Grid>}
        </CardStyled>
      </Col>

      <Col >

        {playersDetails && playersDetails.length !== 0 && <PlayerCardDetailed data={playersDetails} />}
      </Col>
    </Row>
    {/* </TabPane>

    </Tabs> */}

  </Layout >


  return (
    <StatsData />);
}
export default Stats;