import { makeRootReducer, injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'tournaments',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const TournamentsList = require('./containers/TournamentsListContainer').default
      const reducer = require('./modules/tournaments').default
      const teamsReducer = require('./modules/teams').default

      /*  Add the reducer to the store on key 'counter'  */
      store.asyncReducers['tournaments'] = reducer
      store.asyncReducers['teams'] = teamsReducer
      
      store.replaceReducer(makeRootReducer(store.asyncReducers))
      // injectReducer(store, {key: 'tournaments', reducer})
      /*  Return getComponent   */
      cb(null, TournamentsList)

    /* Webpack named bundle   */
    }, 'tournaments')
  }
})

export const TournamentRoute = (store) => ({
  path : 'tournaments/:tournamentId',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const TournamentView = require('./containers/TournamentViewContainer').default
      const reducer = require('./modules/tournaments').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'tournaments', reducer })

      /*  Return getComponent   */
      cb(null, TournamentView)

    /* Webpack named bundle   */
    }, 'tournaments')
  }
})