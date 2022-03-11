import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { noteReducer } from './reducers/noteReducer';



const store = createStore(
  noteReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

store.dispatch({
  type: '@note/created',
  payload: {
    content: 'Esto es una prueba de redux',
    important: true,
    id: 1,
  },
});

store.dispatch({
  type: '@note/created',
  payload: {
    content: 'Esto es una prueba de redux segunda parte',
    important: true,
    id: 1,
  },
});

const App = () => {
  const state = store.getState();
  return (
    <div className="App">
      <div>
        {state.map(note => {
          return (
            <li key={note.id}>
              {note.content}
              <strong>
                {' '}
                {note.important ? 'important' : 'not important'}{' '}
              </strong>
            </li>
          );
        })}
      </div>
    </div>
  );
};

const renderApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderApp(); 
store.subscribe(renderApp)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
