import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import './StudentsItem.css'

class StudentsItem extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
  }

  render() {
    const { _id, name, picture, day } = this.props

    return(
      <article className="student">
        <h1>
        <Link to={`/student/${_id}`} className="link">{ name }</Link></h1>
        <div className={`${day[day.length-1].green ? "green": (day[day.length-1].yellow ? "yellow" : "red")}`}>
        <Link to={`/student/${_id}`}><img src={picture}/></Link>
        </div>
      </article>
    )
  }
}

export default StudentsItem
