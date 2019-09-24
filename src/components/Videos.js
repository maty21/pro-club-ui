

import React, { useState } from "react";
import { Row, Col, Layout, Card, Divider, Icon } from "antd";
import styled from "styled-components"
import { CardStyledVideo, HeaderScreen, SubTitle } from './dumb/styled/Header'
import { withRouter } from "react-router-dom"
import { useSelector } from "react-redux"
// const url = `https://mixer.com/embed/player/CarelessCube550?vod=`


const styledIframe = styled.iframe`
width:36vw;
height:36vh ;
`


const Videos = () => {
    const [currentWatchingVid, watch] = useState(null);
    const url = `https://mixer.com/embed/player/CarelessCube550?muted=false&mixplay=true&vod=`;


    const mixers = useSelector(state => {
        if (state.results && state.results.mixer.length > 0) {

            return state.results.mixer
        }
    });



    const A = videos => videos.map(v =>
        <CardStyledVideo onClick={() => { console.log(`id ${v.id}`); watch(v.id) }} style={{ width: "16vw", margin: "1vh", padding: "5px" }} hoverable cover={<img alt="example"
            src={v.thumbnail} />}
        // actions={[<Icon type="setting" key="setting" />]}
        >
            <Card.Meta style={{ fontSize: '10px' }} title={<SubTitle>{v.name}</SubTitle>} description={`${new Date(v.expiresAt).getDay()} Days Left`} />
            {/* <iframe src={`${url}${v.id}`} ></iframe> */}
        </CardStyledVideo>)

    return (
        <Layout>
            <Row type="flex" justify="start">
                <Col>
                    <HeaderScreen >Videos</HeaderScreen>
                </Col>
            </Row>
            <Row type="flex" justify="center" style={{ height: "36vh" }} >
                {/* <img alt="example" style={{ height: "34vh", marginTop: "3vh" }} src="https://vodcontent-5004.xboxlive.com/channel-98340453-public/732b306f-2a69-4826-9a00-8d7f718d83cb/720.jpg" /> */}
                {mixers && <iframe style={{ width: "34vw", maginTop: "10px", borderWidth: "0px" }} mixplay src={currentWatchingVid ? `${url}${currentWatchingVid}` : `${url}${mixers[0].id}`} ></iframe>}
            </Row>
            <Divider />
            <Row type="flex" justify="start" style={{ overflow: "auto", height: "46vh", }}>
                {mixers && A(mixers)}

            </Row>
        </Layout>

    )



}


export default withRouter(Videos)