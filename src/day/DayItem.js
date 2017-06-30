import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './DayItem.css'

class DayItem extends PureComponent {
  static propTypes = {
    date: PropTypes.string,
    remarks: PropTypes.string
  }

  render() {
    const { _id, date, remarks, red, yellow, green } = this.props

    return(
      <article className="day">
        <h1 className={`${green ? "green": (yellow ? "yellow" : "red")}`}>{ new Date(date).toDateString() }</h1>
        <h5>Remarks: {remarks}</h5>
      </article>
    )
  }
}

export default DayItem
