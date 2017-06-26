import { CREATE_BATCH } from '../actions/batches/create'
import { FETCHED_BATCHES } from '../actions/batches/fetch'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case CREATE_BATCH :
      return [Object.assign({}, payload)].concat(state)

    case FETCHED_BATCHES :
      return [].concat(payload)

    default :
      return state
  }
}
