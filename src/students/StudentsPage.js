import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Title from '../components/Title'
import DayItem from '../day/DayItem'
import fetchBatches from '../actions/batches/fetch'
import subscribeToBatchesService from '../actions/batches/subscribe'
import getCurrentBatch from '../actions/batches/get'
import DayEditor from '../day/DayEditor'

export class StudentsPage extends PureComponent {
  // static propTypes = {
  //   number: PropTypes.number,
  //   fetchBatches: PropTypes.func.isRequired,
  // }

  componentWillMount() {
    const { batch, fetchBatches, subscribeToBatchesService, subscribed } = this.props
    if (!batch) fetchBatches()
    if (!subscribed) subscribeToBatchesService()
  }

  renderDay(day, index) {
    return <DayItem key={index} { ...day } />
  }

  render() {
    const {
      students
    } = this.props

    console.log(students)

    const student = students.find((student) => (
      student._id === this.props.params.studentId
    ))
    console.log(student)

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

const mapStateToProps = ({ batches, currentBatch }, { params }) => {
  const batch = batches.reduce((prev, next) => {
    if (next._id === params.batchId) {
      return next
    }
    return prev
  }, {})

  return {
    ...currentBatch
  }
}

export default connect(mapStateToProps, { fetchBatches, subscribeToBatchesService, getCurrentBatch })(StudentsPage)
