import './App.css';

import { createNote, toggleImportanceOf } from './reducers/noteReducer';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const state = useSelector(state =>state);
  const dispatch = useDispatch();

  const addNote = evt => {
    evt.preventDefault();
    const { target } = evt;
    const content = target.note.value;
    target.note.value = '';
    dispatch(createNote(content));
  };

  const toggleImportant = id => {
    dispatch(toggleImportanceOf(id));
  };
  return (
    <div>
      <form onSubmit={addNote}>
        <input name="note" />
        <button>add</button>
      </form>

      <ul>
        {state.map(note => {
          return (
            <li key={note.id} onClick={() => toggleImportant(note.id)}>
              {note.content}
              <strong>
                {' '}
                {note.important ? 'important' : 'not important'}{' '}
              </strong>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
