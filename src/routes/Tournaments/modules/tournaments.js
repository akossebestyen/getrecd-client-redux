import { Map, List, Record, fromJS } from 'immutable'
import { uniqueId } from 'lodash'

// ------------------------------------
// Constants
// ------------------------------------
export const ADD_TOURNAMENT = 'ADD_TOURNAMENT'

// ------------------------------------
// Actions
// ------------------------------------

export function addTournament (data) {
  let t = new Tournament({tournamentName:data.tournamentName, id: uniqueId(), tournamentTeams: new List()})
  return {
    type    : ADD_TOURNAMENT,
    payload : {[t.id]: t}
  }
}

export const actions = {
  addTournament
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [ADD_TOURNAMENT] : (state, action) => state.merge(action.payload) 
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = Map()
export default function tournamentReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

// ------------------------------------
// Record Types
// ------------------------------------
const Tournament = Record({
  id: undefined,
  tournamentName: '',
  tournamentTeams: List()
})

// ------------------------------------
// Helpers
// ------------------------------------

export const getTournaments = (state) => {
  return state.tournaments.toList()
}

export const getTournament = (state, id) => {
  return state.tournaments.get(id)
}
