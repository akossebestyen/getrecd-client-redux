import { Map, List, Record, fromJS } from 'immutable'
import { uniqueId } from 'lodash'

// ------------------------------------
// Constants
// ------------------------------------
export const ADD_TOURNAMENT_TEAM = 'ADD_TOURNAMENT_TEAM'

// ------------------------------------
// Actions
// ------------------------------------
export const addTournamentTeam = (data) => {
    let tm = new Team({id: uniqueId(), teamName: data.teamName, tournament: data.tournamentId})
    return {
        type: ADD_TOURNAMENT_TEAM,
        payload: { [tm.id]: tm }
    }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [ADD_TOURNAMENT_TEAM] : (state, action) => state.merge(action.payload) 
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = Map()
export default function teamsReducer(state = initialState, action) {
    const handler =  ACTION_HANDLERS[action.type]

    return handler ? handler(state, action) : state
}

// Types
const Team = Record({
  id: undefined,
  teamName: '',
  tournament: ''
})

// ------------------------------------
// Helpers
// ------------------------------------

export const getTeamsByTournament = (state, tournamentId) => {
    return state.teams.filter(team => team.tournament === tournamentId).toList()
} 