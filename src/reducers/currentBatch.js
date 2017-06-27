import { JOINED_BATCH } from '../actions/batches/join'
import { GOT_BATCH } from '../actions/batches/get'

export default (state = null, { type, payload } = {}) => {
  switch (type) {
    case JOINED_BATCH :
    case GOT_BATCH :
      return payload._id

    default :
      return state
  }
}
