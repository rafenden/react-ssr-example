import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchAppsIfNeeded } from '../redux/actions'

import Activity from './Activity'

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchAppsIfNeeded())
  }

  render() {
    const { isFetching, activities } = this.props

    return (
       <div>
         {isFetching && activities.length === 0 && <h2>Loading...</h2>}
         {!isFetching && activities.length === 0 && <h2>Empty.</h2>}

         {activities.map(activity => {
           return <Activity key={activity.id} activity={activity} />
         })}
       </div>
    )
  }
}
 
function mapStateToProps(state) {
  const { isFetching, activities } = state
 
  return {
    isFetching,
    activities
  }
}
 
export default connect(mapStateToProps)(App)
