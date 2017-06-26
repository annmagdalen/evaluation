import React, { PureComponent } from 'react'

class BatchesItem extends PureComponent {
  render() {
    const { number, startDate, endDate } = this.props

    return(
      <article className="batch">
        <h1>BATCH { number }</h1>
        <div>
          <p>{ startDate } - { endDate }</p>
        </div>
      </article>
    )
  }
}

export default BatchesItem
