import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import createBatch from '../actions/batches/create'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'

class BatchesEditor extends PureComponent {
  constructor(props) {
    super()

    const { number, startDate, endDate } = props

    this.state = {
      number,
      startDate,
      endDate
    }
  }

  updateNumber(event) {
    this.setState({
      number: this.refs.number.value
    })
  }

  updateStartDate(event) {
    this.setState({
      startDate: this.refs.startDate.value
    })
  }

  updateEndDate(event) {
    this.setState({
      endDate: this.refs.endDate.value
    })
  }

  saveBatch() {
    const {
      number,
      startDate,
      endDate
    } = this.state

    const batch = {
      number,
      startDate,
      endDate
    }
    this.props.createBatch(batch)
  }

  render() {
    return (
      <div className="editor">
        <input
          type="number"
          ref="number"
          className="number"
          placeholder="Number"
          defaultValue={this.state.number}
          onChange={this.updateNumber.bind(this)} />

        <input
          type="date"
          ref="startDate"
          className="startDate"
          placeholder="Date"
          defaultValue={this.state.startDate}
          onChange={this.updateStartDate.bind(this)} />

        <input
          type="date"
          ref="endDate"
          className="endDate"
          placeholder="Date"
          defaultValue={this.state.endDate}
          onChange={this.updateEndDate.bind(this)} />

        <div className="actions">
          <button className="primary" onClick={this.saveBatch.bind(this)}>Save</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: !!currentUser && !!currentUser._id,
})

export default connect(mapStateToProps, { createBatch })(BatchesEditor)
