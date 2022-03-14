import { useDispatch } from 'react-redux';
import { createNote } from '../reducers/noteReducer';
import { Link } from 'react-router-dom';
/* import { createNewNote } from '../services/notes'; */

export default function NewNote() {
  const dispatch = useDispatch();

  const addNote = async (evt) => {
    evt.preventDefault();
    const { target } = evt;
    const content = target.note.value;
    target.note.value = '';

    const newNote = {
      id:  Math.ceil(Math.random()*1000),
      content,
      important: false,
    }
    //const NewNote = await createNewNote(content);
    dispatch(createNote(newNote));
  };
  return (
    <form onSubmit={addNote}>
      <input name="note" />
      <button>add</button> <br/>
      <Link to="/">Raiz</Link> <br/>
      <Link to="/notescomponent">NotesComponent</Link> <br/>
      <Link to="/notes">Notes</Link>
    </form>
  );
}
