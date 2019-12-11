import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers/rootReducer'
import { composeWithDevTools } from "redux-devtools-extension";
import storeSynchronize from 'redux-localstore';

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
storeSynchronize(store)

//localStorage

// export const loadState = () => {
//   try {
//     const serializedState = localStorage.getItem('state');
//     if (serializedState === null) {
//       return undefined;
//     }
//     return JSON.parse(serializedState);
//   } catch (err) {
//     return undefined;
//   }
// }; 


// export const saveState = (state) => {
//   try {
//     const serializedState = JSON.stringify(state);
//     localStorage.setItem('state', serializedState);
//   } catch {
//     // ignore write errors
//   }
// };

// const persistedState = loadState();

// const store = createStore(
//   app,
//   persistedState
// );
// store.subscribe(() => {
//   saveState({
//     todos: store.getState().todos
//   });
// });