import { createStore } from 'redux'
import { userReducer, initialState } from '../reducers/user'
export const store = createStore(userReducer, initialState);