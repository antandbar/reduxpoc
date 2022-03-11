import { useDispatch, useSelector } from 'react-redux';
import { toggleImportanceOf } from '../reducers/noteReducer';

function Note({ toggleImportant, note }) {
  return (
    <li onClick={() => toggleImportant(note.id)}>
      {note.content}
      <strong> {note.important ? 'important' : 'not important'} </strong>
    </li>
  );
}

export default function NotesContainer() {
  const notes = useSelector(state => state);
  const dispatch = useDispatch();

  const toggleImportant = id => {
    dispatch(toggleImportanceOf(id));
  };
  return <Notes notes={notes} toggleImportant={toggleImportant} />;
}
function Notes({ notes, toggleImportant }) {
  return (
    <ul>
      {notes.map(note => (
        <Note key={note.id} note={note} toggleImportant={toggleImportant} />
      ))}
    </ul>
  );
}
