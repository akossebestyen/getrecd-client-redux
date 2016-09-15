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
            return <div className={classes.tournamentListItem} key={tournament.tournamentName}>
                        <h4>{tournament.tournamentName}</h4>
                        <p><span>Teams</span> {tournament.tournamentTeams.size}</p>
                    </div>
        })}
    </div>
    
    
  </div>
)

TournamentsList.propTypes = {
    tournaments : React.PropTypes.object.isRequired,
    onSubmit : React.PropTypes.func.isRequired
}

export default TournamentsList
