import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Title from '../components/Title'
import StudentsItem from '../students/StudentsItem'
import StudentsEditor from '../students/StudentsEditor'
import fetchBatches from '../actions/batches/fetch'
import subscribeToBatchesService from '../actions/batches/subscribe'
import getCurrentBatch from '../actions/batches/get'
import RaisedButton from 'material-ui/RaisedButton'
import QuestionMark from 'material-ui/svg-icons/action/help'
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

  renderQuestion() {
    alert("Ask the lady with the pink shirt a question")
  }

  render() {
    const {
      number,
      students
    } = this.props

   if(!students) return null

   return (
      <article className="batchPage">
        <header>
          <Title content={`BATCH #${number}`}/>
          <RaisedButton
          label="Ask a student"
          primary={true}
          onClick={this.renderQuestion.bind(this)}
          icon={ <QuestionMark /> }> </RaisedButton>
        </header>
        <div className="bar">
        <p>red: {(students[0].day[1].red ? 1:0 + students[1].day[1].red ? 1:0)/students.length*100}%</p>
        <p>yellow: {(students[0].day[1].yellow ? 1:0 + students[1].day[1].yellow ? 1:0)/students.length*100}%</p>
        <p>green: {(students[0].day[1].green ? 1:0 + students[1].day[1].green ? 1:0)/students.length*100}%</p>
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
