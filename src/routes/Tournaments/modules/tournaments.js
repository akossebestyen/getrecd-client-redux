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
  let tms = fromJS(GenerateTeams(data.numOfTeams))
  let t = new Tournament({tournamentName:data.tournamentName, id: uniqueId(), tournamentTeams: tms})
  return {
    type    : ADD_TOURNAMENT,
    payload : t
  }
}

export const getTournament = (state, id) => {
    return state.tournaments.find((t) => {return t.id === id})
}

export const actions = {
  addTournament
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [ADD_TOURNAMENT] : (state, action) => state.push(action.payload) 
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = List()
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

const Team = Record({
  id: undefined,
  teamName: ''
})

// ------------------------------------
// Helpers
// ------------------------------------

const GenerateTeams = (numOfTeams) => {
  let tms = [];
  for(let i = 0; i < numOfTeams; i++) {
    tms.push(new Team({id: uniqueId(), teamName: 'Team ' + i}))
  }
  return tms
}