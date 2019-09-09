import styled from '@emotion/styled'
import React from 'react';
import { Statistic, Card, Row, Col, Icon } from 'antd';




const ResStats = () => (
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
    <Row >
        <Col span={6}>
            <Statistic title="Wins" value={50} valueStyle={{ color: '#23F0C7' }} prefix={<Icon type="like" />} />
        </Col>
        <Col span={6}>
            <Statistic title="Lost" valueStyle={{ color: '#EF767A' }} value={93} prefix={<Icon type="dislike" />} />
        </Col>
        <Col span={6}>
            <Statistic title="Tie" value={93} valueStyle={{ color: '#FFE347' }} prefix={<Icon type="dislike" />} />
        </Col>
    </Row>

);


export default ResStats;