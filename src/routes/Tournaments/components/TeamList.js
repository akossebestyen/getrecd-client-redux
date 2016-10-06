import React from 'react';

const TeamList = ({teams}) => {
    return (
        <div>
        <ul>
            {teams.map((t,i) => {
                return <li key={t.id}>{t.teamName}</li>
            })}
        </ul>
        </div>
    );
};

export default TeamList;