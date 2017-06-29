import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Editor from 'react-medium-editor'
import joinDay from '../actions/batches/add-day'
import RaisedButton from 'material-ui/RaisedButton'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'

const TYPES = [
  'red',
  'yellow',
  'green'
]

class DayEditor extends PureComponent {
  constructor(props) {
    super()

    const { date, remarks, red, yellow, green } = props

    this.state = {
      date,
      remarks,
      red,
      yellow,
      green
    }
  }

  updateDate(event) {
    this.setState({
      name: this.refs.date.value
    })
  }

  updateRemarks(event) {
    this.setState({
      remarks: this.refs.remarks.value
    })
  }

  setType(event) {
    this.setState({
      red: event.target.value === 'red',
      yellow: event.target.value === 'yellow',
      green: event.target.value === 'green'
    })
  }

  addDayToStudent = () => {
    const { date, remarks, red, yellow, green } = this.state
    const day = { date, remarks, red, yellow, green }
    const { joinDay, currentBatch, currentStudent } = this.props
    joinDay(currentBatch._id, currentStudent[0]._id, day)
  }

  render() {
    return (
      <div className="editor">
        <input
          type="date"
          ref="date"
          className="date"
          placeholder="Date"
          defaultValue={this.state.date}
          onChange={this.updateDate.bind(this)} />

        <input
          type="text"
          ref="remarks"
          className="remarks"
          placeholder="Remarks"
          onChange={this.updateRemarks.bind(this)} />

        {TYPES.map((type) => {
          return <label key={type} htmlFor={type}>
            <input id={type} type="radio"
            name="type" value={type}
            onChange={this.setType.bind(this)} />
            {type}
          </label>
        })}

        <div className="actions">
          <RaisedButton className="primary" onClick={this.addDayToStudent.bind(this)}>Save</RaisedButton>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser, currentBatch, currentStudent, student }) => ({
  signedIn: !!currentUser && !!currentUser._id,
  currentBatch, currentStudent, student
})

export default connect(mapStateToProps, { joinDay })(DayEditor)
