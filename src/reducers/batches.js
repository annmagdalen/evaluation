import { CREATE_BATCH } from '../actions/batches/create'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case CREATE_BATCH :
      return [Object.assign({}, payload)].concat(state)

    default :
      return state
  }
}
