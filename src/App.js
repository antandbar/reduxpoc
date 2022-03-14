/* import { useEffect } from 'react';
import { useDispatch } from 'react-redux'; */
import { Routes, Route} from 'react-router-dom';
import './App.css';
import Notes from './components/Notes';
import NoteComponent from './components/NoteComponent';
/* import { getAll } from './services/notes'; */
/* import { initNotes } from './reducers/noteReducer'; */

const App = () => {
/*   const dispatch = useDispatch();
  useEffect(() => {
    getAll().then(notes => {
      dispatch(initNotes(notes));
    });
  }, [dispatch]); */

  return (
    <div>
      <Routes>
        <Route path="/" element={<NoteComponent />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/notescomponent" element={<NoteComponent />} />
      </Routes>
    </div>
  );
};

export default App;
