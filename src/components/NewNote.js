import { useDispatch } from 'react-redux';
import { createNote } from '../reducers/noteReducer';
import { createNewNote } from '../services/notes';

export default function NewNote() {
  const dispatch = useDispatch();

  const addNote = async (evt) => {
    evt.preventDefault();
    const { target } = evt;
    const content = target.note.value;
    target.note.value = '';
    const NewNote = await createNewNote(content);
    dispatch(createNote(NewNote));
  };
  return (
    <form onSubmit={addNote}>
      <input name="note" />
      <button>add</button>
    </form>
  );
}
