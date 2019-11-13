import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers/rootReducer'

const initState= {};
const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  initState,
    compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
 );

 export default store