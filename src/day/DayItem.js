import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class DayItem extends PureComponent {
  static propTypes = {
    date: PropTypes.string,
    remarks: PropTypes.string
  }

  render() {
    const { _id, date, remarks, red, yellow, green } = this.props

    return(
      <article className="day">
        <h1>{remarks}</h1>
        <h1>{ new Date(date).toDateString() }</h1>
      </article>
    )
  }
}

export default DayItem
