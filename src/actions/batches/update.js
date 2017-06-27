import API from '../../api'
import {
  LOAD_ERROR,
} from '../loading'

const api = new API()
export const SAVE_STUDENT = 'SAVE_STUDENT'

export default (_id, index) => {
  return (dispatch) => {
    const backend = api.service('batches')
    api.app.authenticate()
      .then(() => {
        backend.patch(_id, { save: index })
        .then(() => {
          dispatch({
            type: SAVE_STUDENT,
            payload: index
          })
        })
        .catch((error) => {
          dispatch({
            type: LOAD_ERROR,
            payload: error.message
          })
        })
      })
      .catch((error) => {
        dispatch({
          type: LOAD_ERROR,
          payload: error.message
        })
      })
  }
}
