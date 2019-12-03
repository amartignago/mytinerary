import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers/rootReducer'
import { composeWithDevTools } from "redux-devtools-extension";

const initState= {};
const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  initState,
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware)    )
 );

 export default store