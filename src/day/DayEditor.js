import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Editor from 'react-medium-editor'
import joinStudent from '../actions/batches/add-day'
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

  updateRemarks(text, medium) {
    this.setState({
      remarks: text
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
    const { joinStudent, currentBatch } = this.props
    joinStudent(currentBatch._id, day)
  }

  render() {
    return (
      <div className="editor">
        <input
          type="date"
          ref="date"
          className="date"
          placeholder="Date"
          defaultValue={Date.now}
          onChange={this.updateDate.bind(this)} />

        <Editor
          ref="remarks"
          options={{
            placeholder: {text: 'Write some remarks...'}
          }}
          onChange={this.updateRemarks.bind(this)}
          text={this.state.remarks} />

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

const mapStateToProps = ({ currentUser, currentBatch, student }) => ({
  signedIn: !!currentUser && !!currentUser._id,
  currentBatch, student
})

export default connect(mapStateToProps, { joinStudent })(DayEditor)
