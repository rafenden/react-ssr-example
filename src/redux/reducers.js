import { REQUEST_ACTIVITIES,  RECEIVE_ACTIVITIES } from './actions'

function activities( state = {isFetching: false, activities: []}, action) {
  switch (action.type) {
    case REQUEST_ACTIVITIES:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_ACTIVITIES:
      return Object.assign({}, state, {
        isFetching: false,
        activities: action.activities
      })
    default:
      return state
  }
}

export default activities
