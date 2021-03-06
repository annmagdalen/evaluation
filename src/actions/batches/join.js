import API from '../../api'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'

export const JOINED_BATCH = 'JOINED_BATCH'

const api = new API()

export default (_id, student) => {
  return (dispatch) => {
    dispatch({ type: APP_LOADING })

    const backend = api.service('batches')

    api.app.authenticate()
      .then(() => {

        backend.patch(_id, { student, join: true })
          .then((result) => {
            dispatch({ type: APP_DONE_LOADING })
            dispatch({ type: LOAD_SUCCESS })

            dispatch({
              type: JOINED_BATCH,
              payload: result
            })
          })
          .catch((error) => {
            dispatch({ type: APP_DONE_LOADING })
            dispatch({
              type: LOAD_ERROR,
              payload: error.message
            })
          })
      })
      .catch((error) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({
          type: LOAD_ERROR,
          payload: error.message
        })
      })
  }
}
