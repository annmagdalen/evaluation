import React, { PureComponent } from 'react'

class BatchItem extends PureComponent {
  render() {
    const { number, start_date, end_date } = this.props

    return(
      <article className="batch">
        <h1>BATCH { number }</h1>
        <div>
          <p>{ start_date } - { end_date }</p>
        </div>
      </article>
    )
  }
}

export default BatchItem
