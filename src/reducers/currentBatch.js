import { JOINED_BATCH } from '../actions/batches/join'
import { DISJOINED_BATCH } from '../actions/batches/disjoin'
import { GOT_BATCH } from '../actions/batches/get'

export default (state = null, { type, payload } = {}) => {
  switch (type) {
    case JOINED_BATCH :
    case DISJOINED_BATCH :
    case GOT_BATCH :
      return payload

    default :
      return state
  }
}
