import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Title from '../components/Title'
import StudentsItem from '../students/StudentsItem'
import StudentsEditor from '../students/StudentsEditor'
import fetchBatches from '../actions/batches/fetch'
import subscribeToBatchesService from '../actions/batches/subscribe'
import getCurrentBatch from '../actions/batches/get'

export class BatchesPage extends PureComponent {
  // static propTypes = {
  //   number: PropTypes.number,
  //   fetchBatches: PropTypes.func.isRequired,
  // }

  componentWillMount() {
    const { batch, fetchBatches, getCurrentBatch, subscribeToBatchesService, subscribed } = this.props
    const { batchId } = this.props.params
    if (!batch) fetchBatches()
    getCurrentBatch(batchId)
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

   return (
      <article className="batch page">
        <header>
          <Title content={`BATCH ${number}`}/>
        </header>
        <main>
          { students.map(this.renderStudent.bind(this)) }
          <StudentsEditor />
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
