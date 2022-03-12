import { noteReducer } from './reducers/noteReducer';
import { filterReducer } from './reducers/filterReducers';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';




const reducer = combineReducers({
    notes: noteReducer,
    filter: filterReducer,
  });

  export const store = createStore(
    reducer,
    composeWithDevTools()
  );

