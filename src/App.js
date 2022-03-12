import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Filter from './components/Filter';
import NewNote from './components/NewNote';
import Notes from './components/Notes';
import { getAll } from './services/notes';
import { initNotes } from './reducers/noteReducer';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getAll().then(notes => {
      dispatch(initNotes(notes));
    });
  }, [dispatch]);

  return (
    <div>
      <NewNote />
      <Filter />
      <Notes />
    </div>
  );
};

export default App;
