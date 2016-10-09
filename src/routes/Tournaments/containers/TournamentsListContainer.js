import { connect } from 'react-redux'
import { addTournament, getTournaments } from '../modules/tournaments'

/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component */

import TournamentsList from '../components/TournamentsList'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. */
    
const mapDispatchToProps = {
    onSubmit : (data) => addTournament(data)
}

const mapStateToProps = (state) => ({
    tournaments : getTournaments(state)
})

/*  Note: mapStateToProps is where you should use `reselect` to create selectors.  */

export default connect(mapStateToProps, mapDispatchToProps)(TournamentsList)
