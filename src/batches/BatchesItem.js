import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

class BatchesItem extends PureComponent {
  static propTypes = {
    number: PropTypes.number.isRequired,
  }

  render() {
    const { _id, number, startDate, endDate } = this.props

    return(
      <article className="batch">
        <h1>
        <Link to={`/batch/${_id}`}>BATCH { number }</Link></h1>
        <div>
          <p>{ startDate } - { endDate }</p>
        </div>
      </article>
    )
  }
}

export default BatchesItem
