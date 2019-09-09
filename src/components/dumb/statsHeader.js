import styled from '@emotion/styled'
import React from 'react';

const StatsHeader = () => (
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
)


export default StatsHeader