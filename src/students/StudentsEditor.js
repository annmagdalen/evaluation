import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import joinBatch from '../actions/batches/join'
import RaisedButton from 'material-ui/RaisedButton'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'
import './StudentsEditor.css'

class StudentsEditor extends PureComponent {
  constructor(props) {
    super()

    const { name, picture } = props

    this.state = {
      name,
      picture
    }
  }

  updateName(event) {
    this.setState({
      name: this.refs.name.value
    })
  }

  updatePicture(event) {
    this.setState({
      picture: this.refs.picture.value
    })
  }

  addStudentToBatch = () => {
    const { name, picture } = this.state
    const student = { name, picture }
    const { joinBatch, currentBatch } = this.props
    joinBatch(currentBatch._id, student)
  }

  render() {
    return (
      <div className="editor">
        <input
          type="string"
          ref="name"
          className="name"
          placeholder="Name"
          defaultValue={this.state.name}
          onChange={this.updateName.bind(this)} />

        <input
          type="string"
          ref="picture"
          className="name"
          placeholder="Picture"
          defaultValue={this.state.picture}
          onChange={this.updatePicture.bind(this)} />

        <div className="actions">
          <RaisedButton className="primary" onClick={this.addStudentToBatch.bind(this)}>Save</RaisedButton>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser, currentBatch, student }) => ({
  signedIn: !!currentUser && !!currentUser._id,
  currentBatch, student
})

export default connect(mapStateToProps, { joinBatch })(StudentsEditor)
