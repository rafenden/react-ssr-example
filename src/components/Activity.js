import React from 'react'

export default class Activity extends React.Component {
	render() {
		const { activity } = this.props

		return (
			<div>{activity['object']['dit:subject']}</div>
		)
	}
}
