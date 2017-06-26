import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Title from '../components/Title'
import BatchesItem from './BatchesItem'

class BatchesContainer extends PureComponent {
  renderBatch(batch, index) {
    return <BatchesItem key={index} { ...batch } />
  }

  render() {
    return(
      <div className="batches wrapper">
        <header>
          <Title content="Batches" />
        </header>

        <main>
          { this.props.batches.map(this.renderBatch) }
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ batches }) => ({
  batches
})

export default connect(mapStateToProps)(BatchesContainer)
