import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Title from '../components/Title'
import StudentsItem from '../students/StudentsItem'
import StudentsEditor from '../students/StudentsEditor'
import fetchBatches from '../actions/batches/fetch'
import subscribeToBatchesService from '../actions/batches/subscribe'
import getCurrentBatch from '../actions/batches/get'
import AskQuestion from '../components/AskQuestion'
import './BatchesPage.css'

export class BatchesPage extends PureComponent {
  // static propTypes = {
  //   number: PropTypes.number,
  //   fetchBatches: PropTypes.func.isRequired,
  // }

  componentWillMount() {
    const { batch, fetchBatches, getCurrentBatch, subscribeToBatchesService, subscribed } = this.props
    const { batchId } = this.props.params
    getCurrentBatch(batchId)
    if (!batch) fetchBatches()
    if (!subscribed) subscribeToBatchesService()
  }

  renderStudent(student, index) {
    return <StudentsItem key={index} { ...student } />
  }

  render() {
    const {
      number,
      students
    } = this.props

   if(!students) return null

   let red = 0
   let yellow = 0
   let green = 0

   students.map((student) => {
     if (student.day[0] !== undefined) {
       if (student.day[student.day.length-1].red) {
         red++
       }
       if (student.day[student.day.length-1].yellow) {
         yellow++
       }
       if (student.day[student.day.length-1].green) {
         green++
       }
     }
   })

   let studentsLength = 0
   students.map((student) => {
     if (student.day[0] !== undefined) {
       studentsLength++
     }
   })

   return (
      <article className="batchPage">
        <header>
          <Title content={`BATCH #${number}`}/>
          <AskQuestion students={students}/>
        </header>
        <div className="bar">
        <p className="red">red: {(red/studentsLength*100).toFixed(0)}%</p>
        <p className="yellow">yellow: {(yellow/studentsLength*100).toFixed(0)}%</p>
        <p className="green">green: {(green/studentsLength*100).toFixed(0)}%</p>
        </div>
        <div>
        <h2>Add a new student</h2>
        <StudentsEditor />
        </div>
        <main className="renderStudent">
          { students.map(this.renderStudent.bind(this)) }
        </main>
      </article>
    )
  }
}

const mapStateToProps = ({ batches }, { params }) => {
  const batch = batches.reduce((prev, next) => {
    if (next._id === params.batchId) {
      return next
    }
    return prev
  }, {})

  return {
    ...batch
  }
}

export default connect(mapStateToProps, { fetchBatches, subscribeToBatchesService, getCurrentBatch })(BatchesPage)
