import { put, /* call, */ takeLatest, delay, retry } from 'redux-saga/effects'
import { rsvpApi } from './rsvpApi'
import { submitRequest, submitSuccess, submitFailure } from './rsvpSlice'

function* handleSubmitRsvp(action) {
  try {
    yield delay(500)
    const maxRetries = 3
    const retryDelay = 1000

    const response = yield retry(maxRetries, retryDelay, rsvpApi.submitRsvp, action.payload)
    if (response?.data?.success) {
      yield put(submitSuccess())
    } else {
      yield put(submitFailure('Respuesta inválida del servidor'))
    }
  } catch (error) {
    yield put(submitFailure(error.message || 'Error al enviar RSVP'))
  }
}

export function* watchRsvp() {
  yield takeLatest(submitRequest.type, handleSubmitRsvp)
}
