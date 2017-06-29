import { JOINED_DAY } from '../actions/batches/add-day'
import { GOT_STUDENT } from '../actions/batches/get-student'

export default (state = null, { type, payload } = {}) => {
  switch (type) {
    case JOINED_DAY :
    case GOT_STUDENT :
      return payload

    default :
      return state
  }
}
