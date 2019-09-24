/* eslint-disable no-mixed-operators */

export const playerData = (data) => ({
    homeTeam: {
        id: 1,
        name: "Home Team",
        logoUrl: "/textures/team1.png",
        playerPositionById: [[1], [2, 3, 4, 5], [6, 7], [8, 9, 10], [11]],
        players: [
            {
                id: 1,
                name: data.homeTeam.gk && data.homeTeam.gk.playername || "Bot1",
                tShirtImgUrl: "/textures/tshirt5.png",
                tShirtNr: "1",
                faceImgUrl: "/textures/generic-face.png"
            },
            {
                id: 2,
                name: data.homeTeam.def[0] && data.homeTeam.def[0].playername || "Bot2",
                tShirtImgUrl: "/textures/tshirt8.png",
                tShirtNr: "2",
                faceImgUrl: "/textures/generic-face.png"
            },
            {
                id: 3,
                name: data.homeTeam.def[1] && data.homeTeam.def[1].playername || "Bot3",
                tShirtImgUrl: "/textures/tshirt8.png",
                tShirtNr: "3",
                faceImgUrl: "/textures/generic-face.png"
            },
            {
                id: 4,
                name: data.homeTeam.def[2] && data.homeTeam.def[2].playername || "Bot4",
                tShirtImgUrl: "/textures/tshirt8.png",
                tShirtNr: "4",
                faceImgUrl: "/textures/generic-face.png"
            },
            {
                id: 5,
                name: data.homeTeam.def[3] && data.homeTeam.def[3].playername || "Bot5",
                tShirtImgUrl: "/textures/tshirt8.png",
                tShirtNr: "5",
                faceImgUrl: "/textures/generic-face.png"
            },
            {
                id: 6,
                name: data.homeTeam.md[4] && data.homeTeam.md[4] && data.homeTeam.md[4].playername || "Bot6",
                tShirtImgUrl: "/textures/tshirt8.png",
                tShirtNr: "6",
                faceImgUrl: "/textures/generic-face.png"
            },
            {
                id: 7,
                name: data.homeTeam.md[3] && data.homeTeam.md[3].playername || "Bot7",
                tShirtImgUrl: "/textures/tshirt8.png",
                tShirtNr: "7",
                faceImgUrl: "/textures/generic-face.png"
            },
            {
                id: 8,
                name: data.homeTeam.md[2] && data.homeTeam.md[2].playername || "Bot8",
                tShirtImgUrl: "/textures/tshirt8.png",
                tShirtNr: "8",
                faceImgUrl: "/textures/generic-face.png"
            },
            {
                id: 9,
                name: data.homeTeam.md[1] && data.homeTeam.md[1].playername || "Bot9",
                tShirtImgUrl: "/textures/tshirt8.png",
                tShirtNr: "9",
                faceImgUrl: "/textures/generic-face.png"
            },
            {
                id: 10,
                name: data.homeTeam.md[0] && data.homeTeam.md[0].playername || "Bot10",
                tShirtImgUrl: "/textures/tshirt8.png",
                tShirtNr: "10",
                faceImgUrl: "/textures/generic-face.png"
            },
            {
                id: 11,
                name: data.homeTeam.st && data.homeTeam.st.playername || "Bot11",
                tShirtImgUrl: "/textures/tshirt8.png",
                tShirtNr: "11",
                faceImgUrl: "/textures/generic-face.png"
            }
        ]
    },

    awayTeam: {
        id: 1,
        name: "Away Team",
        logoUrl: "/textures/team2.png",
        playerPositionById: [[1], [2, 3, 4, 5], [6, 7], [8, 9, 10], [11]],
        players: [
            {
                id: 1,
                name: data.awayTeam.gk && data.awayTeam.gk.playername || "Bot1",
                tShirtImgUrl: "/textures/tshirt9.png",
                tShirtNr: "1",
                faceImgUrl: "/textures/generic-face.png"
            },
            {
                id: 2,
                name: data.awayTeam.def[0] && data.awayTeam.def[0].playername || "Bot2",
                tShirtImgUrl: "/textures/tshirt4.png",
                tShirtNr: "2",
                faceImgUrl: "/textures/generic-face.png"
            },
            {
                id: 3,
                name: data.awayTeam.def[1] && data.awayTeam.def[1].playername || "Bot3",
                tShirtImgUrl: "/textures/tshirt4.png",
                tShirtNr: "3",
                faceImgUrl: "/textures/generic-face.png"
            },
            {
                id: 4,
                name: data.awayTeam.def[2] && data.awayTeam.def[2].playername || "Bot4",
                tShirtImgUrl: "/textures/tshirt4.png",
                tShirtNr: "4",
                faceImgUrl: "/textures/generic-face.png"
            },
            {
                id: 5,
                name: data.awayTeam.def[3] && data.awayTeam.def[3].playername || "Bot5",
                tShirtImgUrl: "/textures/tshirt4.png",
                tShirtNr: "5",
                faceImgUrl: "/textures/generic-face.png"
            },
            {
                id: 6,
                name: data.awayTeam.md[4] && data.awayTeam.md[4].playername || "Bot6",
                tShirtImgUrl: "/textures/tshirt4.png",
                tShirtNr: "6",
                faceImgUrl: "/textures/generic-face.png"
            },
            {
                id: 7,
                name: data.awayTeam.md[3] && data.awayTeam.md[3].playername || "Bot7",
                tShirtImgUrl: "/textures/tshirt4.png",
                tShirtNr: "7",
                faceImgUrl: "/textures/generic-face.png"
            },
            {
                id: 8,
                name: data.awayTeam.md[2] && data.awayTeam.md[2].playername || "Bot8",
                tShirtImgUrl: "/textures/tshirt4.png",
                tShirtNr: "8",
                faceImgUrl: "/textures/generic-face.png"
            },
            {
                id: 9,
                name: data.awayTeam.md[0] && data.awayTeam.md[0].playername || "Bot9",
                tShirtImgUrl: "/textures/tshirt4.png",
                tShirtNr: "9",
                faceImgUrl: "/textures/generic-face.png"
            },
            {
                id: 10,
                name: data.awayTeam.md[1] && data.awayTeam.md[1].playername || "Bot10",
                tShirtImgUrl: "/textures/tshirt4.png",
                tShirtNr: "10",
                faceImgUrl: "/textures/generic-face.png"
            },
            {
                id: 11,
                name: data.awayTeam.st && data.awayTeam.st.playername || "Bot11",
                tShirtImgUrl: "/textures/tshirt4.png",
                tShirtNr: "11",
                faceImgUrl: "/textures/generic-face.png"
            }
        ]
    }
}
)

export const gameData = (game) => ({
    gameStats: [
        {
            type: "goals",
            home: game.home.goals,
            away: game.away.goals
        },
        {
            type: "assists",
            home: game.home.assists,
            away: game.away.assists
        },
        {
            type: "Total Shots",
            home: game.home.shots,
            away: game.away.shots
        },
        // {
        //     type: "Shots On Target",
        //     home: game.target.home,
        //     away: game.target.away
        // },
        {
            type: "Pass made",
            home: game.home.passesmade,
            away: game.away.passesmade
        },
        {
            type: "Pass attempts",
            home: game.home.passattempts,
            away: game.away.passattempts
        },
        {
            type: "Red cards",
            home: game.home.redcards,
            away: game.away.redcards
        },
        // {
        //     type: "Offsides",
        //     home: game.offsides.home,
        //     away: game.offsides.away

        // },

        // {
        //     type: "tackles",
        //     home: game.tackles.home,
        //     away: game.tackles.away
        // },
        // {
        //     type: "Dribbles Won",
        //     home: game.dribbles.home,
        //     away: game.dribbles.away
        // },

    ],

    possesionData: {
        type: "Possesion",
        home: game.possesion && game.possesion.home || "60%",
        away: game.possesion && game.possesion.away || "40%"
    }

})

export const stub = {
    homeTeam: {
        id: 1,
        name: "Home Team",
        logoUrl: "/textures/team1.png",
        playerPositionById: [[1], [2, 3, 4, 5], [6, 7], [8, 9, 10], [11]],
        players: [
            {
                id: 1,
                name: "Home 1",
                tShirtImgUrl: "/textures/tshirt5.png",
                tShirtNr: "1",
                faceImgUrl: "/textures/generic-face.png"
            },
            {
                id: 2,
                name: "Home 2",
                tShirtImgUrl: "/textures/tshirt8.png",
                tShirtNr: "2",
                faceImgUrl: "/textures/generic-face.png"
            },
            {
                id: 3,
                name: "Home 3",
                tShirtImgUrl: "/textures/tshirt8.png",
                tShirtNr: "3",
                faceImgUrl: "/textures/generic-face.png"
            },
            {
                id: 4,
                name: "Home 4",
                tShirtImgUrl: "/textures/tshirt8.png",
                tShirtNr: "4",
                faceImgUrl: "/textures/generic-face.png"
            },
            {
                id: 5,
                name: "Home 5",
                tShirtImgUrl: "/textures/tshirt8.png",
                tShirtNr: "5",
                faceImgUrl: "/textures/generic-face.png"
            },
            {
                id: 6,
                name: "Home 6",
                tShirtImgUrl: "/textures/tshirt8.png",
                tShirtNr: "6",
                faceImgUrl: "/textures/generic-face.png"
            },
            {
                id: 7,
                name: "Home 7",
                tShirtImgUrl: "/textures/tshirt8.png",
                tShirtNr: "7",
                faceImgUrl: "/textures/generic-face.png"
            },
            {
                id: 8,
                name: "Home 8",
                tShirtImgUrl: "/textures/tshirt8.png",
                tShirtNr: "8",
                faceImgUrl: "/textures/generic-face.png"
            },
            {
                id: 9,
                name: "Home 9",
                tShirtImgUrl: "/textures/tshirt8.png",
                tShirtNr: "9",
                faceImgUrl: "/textures/generic-face.png"
            },
            {
                id: 10,
                name: "Home 10",
                tShirtImgUrl: "/textures/tshirt8.png",
                tShirtNr: "10",
                faceImgUrl: "/textures/generic-face.png"
            },
            {
                id: 11,
                name: "Home 11",
                tShirtImgUrl: "/textures/tshirt8.png",
                tShirtNr: "11",
                faceImgUrl: "/textures/generic-face.png"
            }
        ]
    },

    awayTeam: {
        id: 1,
        name: "Away Team",
        logoUrl: "/textures/team2.png",
        playerPositionById: [[1], [2, 3, 4, 5], [6, 7], [8, 9, 10], [11]],
        players: [
            {
                id: 1,
                name: "Away 1",
                tShirtImgUrl: "/textures/tshirt9.png",
                tShirtNr: "1",
                faceImgUrl: "/textures/generic-face.png"
            },
            {
                id: 2,
                name: "Away 2",
                tShirtImgUrl: "/textures/tshirt4.png",
                tShirtNr: "2",
                faceImgUrl: "/textures/generic-face.png"
            },
            {
                id: 3,
                name: "Away 3",
                tShirtImgUrl: "/textures/tshirt4.png",
                tShirtNr: "3",
                faceImgUrl: "/textures/generic-face.png"
            },
            {
                id: 4,
                name: "Away 4",
                tShirtImgUrl: "/textures/tshirt4.png",
                tShirtNr: "4",
                faceImgUrl: "/textures/generic-face.png"
            },
            {
                id: 5,
                name: "Away 5",
                tShirtImgUrl: "/textures/tshirt4.png",
                tShirtNr: "5",
                faceImgUrl: "/textures/generic-face.png"
            },
            {
                id: 6,
                name: "Away 6",
                tShirtImgUrl: "/textures/tshirt4.png",
                tShirtNr: "6",
                faceImgUrl: "/textures/generic-face.png"
            },
            {
                id: 7,
                name: "Away 7",
                tShirtImgUrl: "/textures/tshirt4.png",
                tShirtNr: "7",
                faceImgUrl: "/textures/generic-face.png"
            },
            {
                id: 8,
                name: "Away 8",
                tShirtImgUrl: "/textures/tshirt4.png",
                tShirtNr: "8",
                faceImgUrl: "/textures/generic-face.png"
            },
            {
                id: 9,
                name: "Away 9",
                tShirtImgUrl: "/textures/tshirt4.png",
                tShirtNr: "9",
                faceImgUrl: "/textures/generic-face.png"
            },
            {
                id: 10,
                name: "Away 10",
                tShirtImgUrl: "/textures/tshirt4.png",
                tShirtNr: "10",
                faceImgUrl: "/textures/generic-face.png"
            },
            {
                id: 11,
                name: "Away 11",
                tShirtImgUrl: "/textures/tshirt4.png",
                tShirtNr: "11",
                faceImgUrl: "/textures/generic-face.png"
            }
        ]
    },

    //// Match events DATA

    matchData: {
        score: "2 - 1",
        time: "86'"
    },

    eventsData: [
        {
            logoUrl: "/textures/yellow-card.png",
            time: "82'",
            players: [
                {
                    id: 1,
                    teamId: 1,
                    name: "Home 1"
                }
            ]
        },
        {
            logoUrl: "/textures/yellow-card.png",
            time: "80'",
            players: [
                {
                    id: 7,
                    teamId: 2,
                    name: "Away 7"
                }
            ]
        },
        {
            logoUrl: "/textures/goal.png",
            time: "73'",
            players: [
                {
                    id: 2,
                    teamId: 2,
                    name: "Away 2"
                }
            ]
        },
        {
            logoUrl: "/textures/change2.png",
            time: "71'",
            players: [
                {
                    id: 1,
                    teamId: 1,
                    name: "Home 1"
                },
                {
                    id: 2,
                    teamId: 1,
                    name: "Home 2"
                }
            ]
        },
        {
            logoUrl: "/textures/goal.png",
            time: "65'",
            players: [
                {
                    id: 3,
                    teamId: 1,
                    name: "Home 3"
                }
            ]
        },
        {
            logoUrl: "/textures/yellow-card.png",
            time: "61'",
            players: [
                {
                    id: 1,
                    teamId: 1,
                    name: "Home 1"
                }
            ]
        },
        {
            logoUrl: "/textures/change2.png",
            time: "55'",
            players: [
                {
                    id: 5,
                    teamId: 2,
                    name: "Away 5"
                },
                {
                    id: 6,
                    teamId: 2,
                    name: "Away 6"
                }
            ]
        },
        {
            logoUrl: "/textures/goal.png",
            time: "53'",
            players: [
                {
                    id: 4,
                    teamId: 1,
                    name: "Home 4"
                }
            ]
        },
        {
            logoUrl: "/textures/yellow-card.png",
            time: "49'",
            players: [
                {
                    id: 9,
                    teamId: 1,
                    name: "Home 9"
                }
            ]
        },
        {
            logoUrl: "/textures/yellow-card.png",
            time: "36'",
            players: [
                {
                    id: 5,
                    teamId: 1,
                    name: "Home 5"
                }
            ]
        },
        {
            logoUrl: "/textures/red-card.png",
            time: "31'",
            players: [
                {
                    id: 2,
                    teamId: 2,
                    name: "Away 2"
                }
            ]
        },
        {
            logoUrl: "/textures/yellow-card.png",
            time: "23'",
            players: [
                {
                    id: 2,
                    teamId: 2,
                    name: "Away 2"
                }
            ]
        }
    ],

    /// Field /textures DATA

    soccerField: {
        width: 100,
        height: 50,
        textureUrl: "/textures/soccer.png"
    },

    iceHockeyField: {
        width: 68 * 2.15,
        height: 68,
        textureUrl: "/textures/icehockey.png"
    },

    basketball: {
        width: 89,
        height: 51,
        textureUrl: "/textures/basketball.png"
    },

    soccerField2D: {
        width: 1200,
        height: 780,
        textureUrl: "/textures/soccer.png"
    },

    iceHockeyField2D: {
        width: 68 * 2.15 * 10,
        height: 68 * 10,
        textureUrl: "/textures/icehockey.png"
    },

    basketball2D: {
        width: 68 * 2.15 * 10,
        height: 68 * 10,
        textureUrl: "/textures/icehockey.png"
    },

    // game stats DATA

    gameStats: [
        {
            type: "Total Shots",
            home: "17",
            away: "12"
        },
        {
            type: "Shots On Target",
            home: "5",
            away: "7"
        },
        {
            type: "Pass Accuracy",
            home: "75%",
            away: "86%"
        },
        {
            type: "Aerial Won",
            home: "70%",
            away: "30%"
        },
        {
            type: "Offsides",
            home: "2",
            away: "3"
        },
        {
            type: "Fouls",
            home: "22",
            away: "13"
        },
        {
            type: "Corners",
            home: "3",
            away: "5"
        },
        {
            type: "Throwns",
            home: "23",
            away: "24"
        },
        {
            type: "Dribbles Won",
            home: "10",
            away: "17"
        },
        {
            type: "Tackles",
            home: "36",
            away: "28"
        }
    ],

    possesionData: {
        type: "Possesion",
        home: "60%",
        away: "40%"
    },

    teamsTable: [
        {
            name: "team away",
            logoUrl: "/textures/tshirt5.png",
            stats: [1, 2, 3, 7, 5]
        },
        {
            name: "team away 2",
            logoUrl: "/textures/tshirt5.png",
            stats: [1, 2, 3, 7, 5]
        },
        {
            name: "team away 3",
            logoUrl: "/textures/tshirt5.png",
            stats: [1, 2, 3, 7, 5]
        }
    ],

    /// Field Play
    FPObjects: [
        {
            x: 50,
            y: 30,
            data: {
                id: 1,
                name: "Away 1",
                tShirtImgUrl: "/textures/tshirt9.png",
                tShirtNr: "1",
                faceImgUrl: "/textures/generic-face.png"
            }
        },
        {
            x: 75,
            y: 45,
            data: {
                id: 2,
                name: "Away 2",
                tShirtImgUrl: "/textures/tshirt9.png",
                tShirtNr: "2",
                faceImgUrl: "/textures/generic-face.png"
            }
        },
        {
            x: 85,
            y: 20,
            data: {
                id: 3,
                name: "Away 3",
                tShirtImgUrl: "/textures/tshirt9.png",
                tShirtNr: "3",
                faceImgUrl: "/textures/generic-face.png"
            }
        }
    ],
    FPArrows: [
        {
            start: [50, 30, 0],
            middle: [62, 37, 20],
            end: [75, 45, 0],
            color: 0x0000ff,
            lineWidth: 3
        },
        {
            start: [75, 45, 0],
            middle: [80, 30, 10],
            end: [85, 20, 0],
            color: 0x007fff,
            lineWidth: 3
        },
        {
            start: [85, 20, 0],
            end: [100, 35, 2],
            color: 0xff0000,
            lineWidth: 3
        }
    ]
};
