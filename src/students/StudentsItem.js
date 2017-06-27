import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

class StudentsItem extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
  }

  render() {
    const { _id, name, picture } = this.props

    return(
      <article className="student">
        <h1>
        <Link to={`/student/${_id}`}>{ name }</Link></h1>
        <img src={picture}/>
      </article>
    )
  }
}

export default StudentsItem
