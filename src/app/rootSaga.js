import { watchRsvp } from '../features/rsvp/rsvpSaga'
import { all, fork } from 'redux-saga/effects'

export default function* rootSaga() {
  yield all([fork(watchRsvp)])
}
