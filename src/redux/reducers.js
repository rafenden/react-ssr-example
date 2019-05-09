import { REQUEST_ACTIVITIES,  RECEIVE_ACTIVITIES } from './actions'

function apps( state = {isFetching: false, apps: []}, action) {
  switch (action.type) {
    case REQUEST_ACTIVITIES:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_ACTIVITIES:
      return Object.assign({}, state, {
        isFetching: false,
        apps: action.apps
      })
    default:
      return state
  }
}

export default apps
