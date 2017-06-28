import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import './BatchesItem.css'

class BatchesItem extends PureComponent {
  static propTypes = {
    number: PropTypes.number.isRequired,
  }

  render() {
    const { _id, number, startDate, endDate, students } = this.props

    let newStartDate = new Date(startDate);
    newStartDate = newStartDate.toDateString()

    let newEndDate = new Date(endDate);
    newEndDate = newEndDate.toDateString()

    return(
      <article className="batch">
      <header>
        <h1>
        <Link to={`/batch/${_id}`} className="link">BATCH #{ number }</Link></h1>
        </header>
        <main>
          <p>{ newStartDate } </p>
          <p>--</p>
          <p>{ newEndDate }</p>
        </main>
        <footer>
          <p>{ students.length } students</p>
        </footer>
      </article>
    )
  }
}

export default BatchesItem
