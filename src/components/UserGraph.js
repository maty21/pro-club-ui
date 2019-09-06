import React, { useState } from 'react';
import { ResponsiveLine } from '@nivo/line'
import { stub } from "./stub";
import { LiveEvents, LiveEvent, Field2D, Field3D, PlayerDetails, GameStats, TeamsTable, FieldPlay } from 'sport-stats';// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.



// const stub = {
//     homeTeam: {
//         id: 1,
//         name: 'Home Team',
//         logoUrl: '/textures/team1.png',
//         playerPositionById: [
//             [1],
//             [2, 3, 4, 5],
//             [6, 7],
//             [8, 9, 10],
//             [11]
//         ],
//         players: [
//             {
//                 id: 1,
//                 name: 'Home Player 1',
//                 tShirtImgUrl: '/textures/tshirt5.png',
//                 tShirtNr: '1',
//                 faceImgUrl: '/textures/generic-face.png'
//             },
//             {
//                 id: 2,
//                 name: 'Home Player 2',
//                 tShirtImgUrl: '/textures/tshirt5.png',
//                 tShirtNr: '2',
//                 faceImgUrl: '/textures/generic-face.png'
//             }]
//     },
//     soccerField: {
//         width: 400,
//         height: 200,
//         textureUrl: '/textures/soccer.png'
//     }
// }
export default function UserGraph({ data /* see data tab */ }) {
    return (
        <div>
            <Field3D field={stub.soccerField} homeTeam={stub.homeTeam} awayTeam={stub.homeTeam} />
        </div>)
}