import React, { PureComponent } from 'react'
import Title from '../components/Title'
import BatchItem from './BatchItem'

class BatchesContainer extends PureComponent {
  renderBatch(batch, index) {
    return <BatchItem key={index} { ...batch } />
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

export default BatchesContainer
