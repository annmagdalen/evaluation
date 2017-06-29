import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import createBatch from '../actions/batches/create'
import RaisedButton from 'material-ui/RaisedButton'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'
import './BatchesEditor.css'

class BatchesEditor extends PureComponent {
  constructor(props) {
    super()

    const { number, startDate, endDate } = props

    this.state = {
      number,
      startDate,
      endDate,
      errors: {}
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

  validate(batch) {
  const { number, startDate, endDate } = batch

  let errors = {}

  if (!number || number === '') errors.number = 'Batch number is missing'
  if (!startDate || startDate === '') errors.startDate = 'Start date is missing'
  if (!endDate || endDate === '') errors.endDate = 'End date is missing'
  if (endDate < startDate) errors.endDate = 'End date needs to be after state date'

  this.setState({
    errors,
  })

  return Object.keys(errors).length === 0
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

    if (this.validate(batch)) {
      this.props.createBatch(batch)
    }
  }

  render() {
    const { errors } = this.state

    return (
      <div className="editor">
        <input
          type="number"
          ref="number"
          className="number"
          placeholder="Batch #"
          defaultValue={this.state.number}
          onChange={this.updateNumber.bind(this)} />

        { errors.number && <p className="error">{ errors.number }</p> }

        <input
          type="date"
          ref="startDate"
          className="Date"
          placeholder="Date"
          defaultValue={this.state.startDate}
          onChange={this.updateStartDate.bind(this)} />

        { errors.startDate && <p className="error">{ errors.startDate }</p> }

        <input
          type="date"
          ref="endDate"
          className="Date"
          placeholder="Date"
          defaultValue={this.state.endDate}
          onChange={this.updateEndDate.bind(this)} />

        { errors.endDate && <p className="error">{ errors.endDate }</p> }

        <div className="actions">
          <RaisedButton className="primary" onClick={this.saveBatch.bind(this)}>Save</RaisedButton>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: !!currentUser && !!currentUser._id,
})

export default connect(mapStateToProps, { createBatch })(BatchesEditor)
