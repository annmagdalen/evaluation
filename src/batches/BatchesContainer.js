import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import BatchesEditor from './BatchesEditor'
import BatchesItem from './BatchesItem'
import fetchBatches from '../actions/batches/fetch'
import subscribeToBatchesService from '../actions/batches/subscribe'
import './BatchesContainer.css'

class BatchesContainer extends PureComponent {
  static propTypes = {
    batches: PropTypes.array.isRequired,
    fetchBatches: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.fetchBatches()
    this.props.subscribeToBatchesService()
  }

  renderBatch(batch, index) {
    return <BatchesItem key={index} { ...batch } />
  }

  render() {
    if (this.props.currentUser === null) {
      return(
        <div className="welcome">
        <h1>Welcome to the Teachers Evaluation Tool! </h1>
        <br/><br/>
        <h2>...you need to sign in as a teacher first... </h2>
        </div>
      )
    } else {
    return(
      <div className="batches wrapper">
        <div>
        <h2>Add a new Batch</h2>
          <BatchesEditor />
        </div>
        <main className="batchesContainer">
          { this.props.batches.map(this.renderBatch.bind(this)) }
        </main>
      </div>
    )
  }
  }
}

const mapStateToProps = ({ currentUser, batches }) => ({
  currentUser, batches
})

export default connect(mapStateToProps, { fetchBatches, subscribeToBatchesService })(BatchesContainer)
