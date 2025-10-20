import { combineReducers } from 'redux'
import rsvpReducer from '../features/rsvp/rsvpSlice'

export const rootReducer = combineReducers({ rsvp: rsvpReducer })
