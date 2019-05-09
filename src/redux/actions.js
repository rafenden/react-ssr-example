export const REQUEST_ACTIVITIES = 'REQUEST_ACTIVITIES'
export const RECEIVE_ACTIVITIES = 'RECEIVE_ACTIVITIES'


function requestActivities() {
  return {
    type: REQUEST_ACTIVITIES
  }
}

function receiveActivities(json) {
  return {
    type: RECEIVE_ACTIVITIES,
    activities: json
  }
}

function fetchActivities() {
  return dispatch => {
    dispatch(requestActivities())
    return fetch(`assets/data.json`)
      .then(response => response.json())
      .then(json => dispatch(receiveActivities(json)))
  }
}

function shouldFetchActivities(state) {
  const activities = state.activities
  if (activities.length === 0) {
    return true
  } else if (state.isFetching) {
    return false
  }
}

export function fetchActivitiesIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchActivities(getState())) {
      return dispatch(fetchActivities())
    }
  }
}
