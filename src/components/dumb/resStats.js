import styled from '@emotion/styled'
import React from 'react';
import { Statistic, Card, Row, Col, Icon } from 'antd';




const ResStats = ({ win, lost, tie }) => (
    // <div style={{ padding: '5px', fontSize: '4px' }}>
    //     <Row gutter={20}>
    //         <Col span={8} >
    //             <Card style={{ fontSize: '4px' }}>
    //                 <Statistic
    //                     value={9}
    //                     precision={0}
    //                     valueStyle={{ color: '#3f8600' }}
    //                     suffix="W"
    //                 />
    //             </Card>
    //         </Col>
    //         <Col span={8}>
    //             <Card>
    //                 <Statistic

    //                     value={4}
    //                     precision={0}
    //                     valueStyle={{ color: '#cf1322' }}

    //                     suffix="L"
    //                 />
    //             </Card>
    //         </Col>
    //         <Col span={8}>
    //             <Card>
    //                 <Statistic

    //                     value={4}
    //                     precision={0}
    //                     valueStyle={{ color: '#cf1322' }}

    //                     suffix="L"
    //                 />
    //             </Card>
    //         </Col>
    //     </Row>
    // </div>
    <Row type="flex" justify="center">
        <Col span={6}>
            <Statistic  title="Wins" value={win} valueStyle={{ color: '#93de99',fontSize: '18px' }} prefix={<Icon type="like" />} />
        </Col>
        <Col span={6}>
            <Statistic title="Lost" valueStyle={{ color: '#EF767A',fontSize: '18px' }} value={lost} prefix={<Icon type="dislike" />} />
        </Col>
        <Col span={6}>
            <Statistic title="Tie" value={tie} valueStyle={{ color: 'rgba(71, 255, 224, 0.75)',fontSize: '18px' }} prefix={<Icon type="dislike" />} />
        </Col>
    </Row>

);


export default ResStats;