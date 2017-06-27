import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

class DayItem extends PureComponent {
  static propTypes = {
    date: PropTypes.string.isRequired,
    remarks: PropTypes.string
  }

  render() {
    const { _id, date, remarks, red, yellow, green } = this.props

    return(
      <article className="day">
        <h1>{ date }</h1>
      </article>
    )
  }
}

export default DayItem
