import './App.css';
import Filter from './components/Filter';
import NewNote from './components/NewNote';
import Notes from './components/Notes';


const App = () => {

  return (
    <div>
      <NewNote />
      <Filter/>
      <Notes />
    </div>
  );
};

export default App;
