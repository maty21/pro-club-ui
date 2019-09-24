import React from 'react'
import Stats from "./Stats";
import { withRouter, Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import { gameData, playerData } from "./stub";


const gameStats = (match) => {
    const data = {
        home: { ...match.team.stats, possesion: "60%" },
        away: { ...match.opponent.stats, possesion: "40%" }
    }

    return gameData(data)
}
const playersPosition = (teamPlayers) => {


    const data = {
        gk: teamPlayers.find(p => p.pos === "1"),
        def: teamPlayers.filter(p => p.pos === "2"),
        md: teamPlayers.filter(p => p.pos === "3"),
        st: teamPlayers.find(p => p.pos === "4"),
    }

    return data;
}
const StatsContainer = ({ match: { params: { gameId } } /* see data tab */ }) => {



    const results = useSelector(state => {
        if (gameId) {
            if (state.results && state.results.ea && state.results.ea.matches) {
                const match = state.results.ea.matches.find(m => m.matchId === gameId)
                if (match) {
                    const games = gameStats(match)
                    const playersPos = playerData({
                        homeTeam: playersPosition(match.team.playersDetails),
                        awayTeam: playersPosition(match.opponent.playersDetails)
                    })

                    return {
                        games,
                        playersPos,
                        playersDetails: match.team.playersDetails
                    }
                }


            }



        }
        else {
            if (state.results && state.results.ea && state.results.ea.matches) {
                return { matchId: state.results.ea.matches[0].matchId }
            }

        }
    });
    if (!gameId) {
        return (<Redirect to={results && results.matchId ? `games/${results && results.matchId}` : "/"} replace />)
    }


    return (<Stats key={gameId} id={gameId} playersDetails={(results && results.playersDetails)} games={(results && results.games) || { gameStats: [], possesionData: {} }} playersPosition={(results && results.playersPos) || []} />)



}






export default withRouter(StatsContainer);

// if (!gameId) {
    //   <Redirect to="whatever" replace />
    // }