import styled from '@emotion/styled'
import React from 'react';
import { Statistic, Card, Row, Col, Icon } from 'antd';



const StatisticStyled= styled(Statistic)`
fontFamily: "Bungee", cursive;
fontSize: '18px';
`


const ResStats = ({ win, lost, tie }) => (
   
    <Row type="flex" justify="center">
        <Col span={6}>
            <StatisticStyled title="Wins" value={win} valueStyle={{ color: '#93de99', fontSize: '18px', fontFamily: '"Bungee", cursive' }} prefix={<Icon type="like" />} />
        </Col>
        <Col span={6}>
            <StatisticStyled title="Lost" valueStyle={{ color: '#EF767A', fontSize: '18px', fontFamily: '"Bungee", cursive' }} value={lost} prefix={<Icon type="dislike" />} />
        </Col>
        <Col span={6}>
            <StatisticStyled title="Tie" value={tie} valueStyle={{ color: 'rgba(71, 255, 224, 0.75)', fontSize: '18px', fontFamily: '"Bungee", cursive' }} prefix={<Icon type="dislike" />} />
        </Col>
    </Row>

);


export default ResStats;