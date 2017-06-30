import React, { PureComponent } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import QuestionMark from 'material-ui/svg-icons/action/help'

class AskQuestion extends PureComponent {

  render() {
    const { students } = this.props

    let redStudents = []
    students.map((student) => {
      if (student.day[0] !== undefined) {
        if (student.day[student.day.length-1].red) {
          redStudents=redStudents.concat(student)
        }
        return redStudents
      }})
      let yellowStudents = []
      students.map((student) => {
        if (student.day[0] !== undefined) {
          if (student.day[student.day.length-1].yellow) {
            yellowStudents=yellowStudents.concat(student)
          }
          return yellowStudents
      }})
      let greenStudents = []
      students.map((student) => {
        if (student.day[0] !== undefined) {
          if (student.day[student.day.length-1].green) {
            greenStudents=greenStudents.concat(student)
          }
          return greenStudents
      }})

    function getRandomStudent() {
      const d=Math.random()
      console.log(d)
      let randomStudent = d <= 0.5 ? redStudents[Math.floor(Math.random()*redStudents.length)] : (d > 0.83 ? greenStudents[Math.floor(Math.random()*greenStudents.length)] : yellowStudents[Math.floor(Math.random()*yellowStudents.length)])

      if (randomStudent === undefined) {
        getRandomStudent()
      } else {
        return alert(randomStudent.name)
      }
    }

    return (
    <RaisedButton
    label="Ask a student"
    primary={true}
    onClick={getRandomStudent}
    icon={ <QuestionMark /> }> </RaisedButton>
    )
  }
}

export default AskQuestion
