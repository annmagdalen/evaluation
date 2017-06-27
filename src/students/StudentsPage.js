import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Title from '../components/Title'
import DayItem from '../day/DayItem'
import fetchStudents from '../actions/students/fetch'

export class StudentsPage extends PureComponent {
  static propTypes = {
    name: PropTypes.number,
    fetchStudents: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.fetchStudents()
  }

  renderDay(day, index) {
    return <DayItem key={index} { ...day } />
  }

  render() {
    const {
      name,
      day
    } = this.props

   if(!day) return null

   return (
      <article className="student page">
      <h1>Hello</h1>
        <header>
          <Title content={ name }/>
        </header>
        <main>
          { day.map(this.renderDay.bind(this)) }
        </main>
      </article>
    )
  }
}

const mapStateToProps = ({ students }, { params }) => {
  const student = students.reduce((prev, next) => {
    if (next._id === params.studentId) {
      return next
    }
    return prev
  }, {})

  return {
    ...student
  }
}

export default connect(mapStateToProps, { fetchStudents })(StudentsPage)
