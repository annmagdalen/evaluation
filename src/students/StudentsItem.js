import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import disjoinBatch from '../actions/batches/disjoin'
import RaisedButton from 'material-ui/RaisedButton'
import './StudentsItem.css'

class StudentsItem extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
  }

  deleteStudentFromBatch = () => {
    const { _id } = this.props
    const student = { _id }
    const { disjoinBatch, currentBatch } = this.props
    disjoinBatch(currentBatch._id, student)
  }

  render() {
    const { _id, name, picture, day } = this.props

    return(
      <article className="student">
        <h1>
        <Link to={`/student/${_id}`} className="link">{ name }</Link></h1>
        <div className={`${day[day.length-1] === undefined ? "" : (day[day.length-1].green ? "green": (day[day.length-1].yellow ? "yellow" : "red"))}`}>
        <Link to={`/student/${_id}`}><img src={picture}/></Link>
        </div>
        <RaisedButton className="primary" onClick={this.deleteStudentFromBatch.bind(this)}>Delete this student</RaisedButton>
      </article>
    )
  }
}

const mapStateToProps = ({ currentUser, currentBatch, student }) => ({
  signedIn: !!currentUser && !!currentUser._id,
  currentBatch, student
})

export default connect(mapStateToProps, { disjoinBatch })(StudentsItem)
