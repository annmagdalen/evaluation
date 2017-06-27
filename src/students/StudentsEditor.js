import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import createStudent from '../actions/students/create'
import joinBatch from '../actions/batches/join'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'

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

  saveStudent() {
    const {
      name,
      picture
    } = this.state

    const student = {
      name,
      picture
    }
    this.props.createStudent(student)

    const { joinBatch, currentBatch } = this.props
    joinBatch(currentBatch)
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
          className="picture"
          placeholder="Picture"
          defaultValue={this.state.picture}
          onChange={this.updatePicture.bind(this)} />

        <div className="actions">
          <button className="primary" onClick={this.saveStudent.bind(this)}>Save</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser, currentBatch }) => ({
  signedIn: !!currentUser && !!currentUser._id,
  currentBatch
})

export default connect(mapStateToProps, { createStudent, joinBatch })(StudentsEditor)
