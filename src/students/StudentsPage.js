import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Title from '../components/Title'
import DayItem from '../day/DayItem'
import getCurrentStudent from '../actions/batches/get-student'
import DayEditor from '../day/DayEditor'

export class StudentsPage extends PureComponent {
  // static propTypes = {
  //   number: PropTypes.number,
  //   fetchBatches: PropTypes.func.isRequired,
  // }

  componentWillMount() {
    const { getCurrentStudent } = this.props
    const { studentId } = this.props.params
    const currentStudent = this.props.students.filter((student) => {
      return student._id === this.props.params.studentId
    })
    getCurrentStudent(currentStudent)
  }

  renderDay(day, index) {
    return <DayItem key={index} { ...day } />
  }

  render() {
    const {
      students
    } = this.props

    const student = students.find((student) => (
      student._id === this.props.params.studentId
    ))

   if(!students) return null

   return (
      <article className="batch page">
        <header>
          <Title content={student.name}/>
        </header>
        <div>
          <h3>Add a new evaluation</h3>
          <DayEditor />
        </div>
        <main>
          { student.day.map(this.renderDay.bind(this)) }
        </main>
      </article>
    )
  }
}

const mapStateToProps = ({ currentBatch }) => {
  return {
    ...currentBatch
  }
}

export default connect(mapStateToProps, { getCurrentStudent })(StudentsPage)
