import React from 'react'
import TournamentsForm from './TournamentsForm'
import classes from './Tournaments.scss'

export const TournamentsList = (props) => (
  <div className="row">
    <div className="col-md-6">
        <h3>Create Tourney</h3>
        <TournamentsForm onSubmit={props.onSubmit}></TournamentsForm>
    </div>
    <div className="col-md-12">
        <h3>Tourney List</h3>
        {props.tournaments.map(function(tournament){
            return <div className={classes.tournamentListItem}>
                        <h4>{tournament.tournamentName}</h4>
                        <p><span>Pools</span> {tournament.numOfPools}</p>
                        <p><span>Teams</span> {tournament.numOfTeams}</p>
                    </div>
        })}
    </div>
    
    
  </div>
)

TournamentsList.propTypes = {
    tournaments : React.PropTypes.array.isRequired,
    onSubmit : React.PropTypes.func.isRequired
}

export default TournamentsList
