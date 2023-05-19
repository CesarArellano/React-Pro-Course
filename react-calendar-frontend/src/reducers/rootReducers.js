import { combineReducers } from 'redux';

// Reducers
import { authReducer } from './authReducer';
import { uiReducer } from './uiReducers';
import { calendarReducer } from './calendarReducer';

export const rootReducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  calendar: calendarReducer
})