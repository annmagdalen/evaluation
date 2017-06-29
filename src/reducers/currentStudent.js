import { JOINED_STUDENT } from '../actions/batches/add-day'
import { GOT_STUDENT } from '../actions/batches/get-student'

export default (state = null, { type, payload } = {}) => {
  switch (type) {
    case JOINED_STUDENT :
    case GOT_STUDENT :
      return payload

    default :
      return state
  }
}
