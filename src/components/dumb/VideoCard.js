import React from "react";
import { Title, CardStyled, SubTitle } from "./styled/Header";
import { ReactComponent as Maccabi } from "../../images/maccabi-haifa-logo.svg";
import ResStats from './resStats';
import PlayerStat from './PlayerStat'
import { Card, Row, Col, Divider, Button } from 'antd';
import { Link } from 'react-router-dom';
const TitleWithButton = () => (
    <Title>
        <Row gutter={16}>
            <Col span={18}>
                VOD
            </Col>
            <Col span={2}>
                <Link to={`/videos`}>
                    <Button type="primary" ghost>Extra</Button>
                </Link>
            </Col>
        </Row>


    </Title>
)

const VideoCard = ({ video }) => {

    const url = `https://mixer.com/embed/player/CarelessCube550?vod=${video && video.id}`
    return (
        <CardStyled title={<TitleWithButton />} >
            <Row type="flex" justify="center">
                <iframe src={url} ></iframe>
            </Row>
        </CardStyled>
    )
}

export default VideoCard;