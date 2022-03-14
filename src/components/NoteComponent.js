import NewNote from './NewNote';
import Filter from './Filter';
import Notes from './Notes';
import { Fragment } from 'react';

export default function NoteComponent() {
  return (
    <Fragment>
      <NewNote />
      <Filter />
      <Notes />
    </Fragment>
  );
}
