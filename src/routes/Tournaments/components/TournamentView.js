import React from 'react';
import TeamList from './TeamList'
const TournamentView = ({tournament, teams}) => {
    return (
        <div>
            <h4>{tournament.tournamentName}</h4>
            <TeamList teams={teams} />
        </div>
    );
};

export default TournamentView;