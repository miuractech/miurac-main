import { legacy_createStore as createStore} from 'redux'
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import authReducer from './authSlice';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import appl

const rootReducer = combineReducers({
    auth: authReducer,
  });
  
export const store = configureStore({
    reducer: rootReducer,
    applyMiddleware(thunk),
});
  
