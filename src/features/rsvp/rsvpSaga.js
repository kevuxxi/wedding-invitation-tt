import { put, call, takeLatest } from 'redux-saga/effects'
import { rsvpApi } from './rsvpApi'
import { submitRequest, submitSuccess, submitFailure } from './rsvpSlice'

function* handleSubmitRsvp(action) {
  try {
    const response = yield call(rsvpApi.submitRsvp, action.payload)
    yield put(submitSuccess(response.data))
  } catch (error) {
    yield put(submitFailure(error.response?.data || error.message))
  }
}

export function* watchRsvp() {
  yield takeLatest(submitRequest.type, handleSubmitRsvp)
}
