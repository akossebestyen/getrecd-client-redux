import { Map, List } from 'immutable'

// ------------------------------------
// Constants
// ------------------------------------
export const ADD_TOURNAMENT = 'ADD_TOURNAMENT'

// ------------------------------------
// Actions
// ------------------------------------

export function addTournament (data) {
  return {
    type    : ADD_TOURNAMENT,
    payload : data
  }
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
