import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchBatches from '../actions/batches/fetch'
import Title from '../components/Title'
import StudentsEditor from '../students/StudentsEditor'
import fetchStudents from '../actions/students/fetch'
import subscribeToStudentsService from '../actions/students/subscribe'

export class BatchesPage extends PureComponent {
  static propTypes = {
    number: PropTypes.number.isRequired,
    startDate: PropTypes.instanceOf(Date).isRequired,
    endDate: PropTypes.instanceOf(Date).isRequired,
    students: PropTypes.shape({
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired
    })
  }

  componentWillMount() {
    this.props.fetchBatches()
    this.props.fetchStudents()
    this.props.subscribeToStudentsService()
  }

  render() {
    const {
      number,
      startDate,
      endDate,
      students
    } = this.props

    return(
      <article className="batch page">
        <header>
          <Title content={ number } />
        </header>
        <StudentsEditor/>
      </article>
    )
  }
}

const mapStateToProps = ({ batches }, { params }) => {
  const batch = batches.reduce((prev, next) => {
    if (next.number === params.batchNumber) {
      return next
    }
    return prev
  }, {})

  return {
    ...batch
  }
}

export default connect(mapStateToProps, { fetchBatches, fetchStudents, subscribeToStudentsService })(BatchesPage)
