import React from 'react';
import TeamList from './TeamList'
const TournamentView = ({tournament}) => {
    return (
        <div>
            <h4>{tournament.tournamentName}</h4>
            <TeamList teams={tournament.tournamentTeams} />
        </div>
    );
};

export default TournamentView;