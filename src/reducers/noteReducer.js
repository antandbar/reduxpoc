export const noteReducer = (state = [], action) => {
  switch (action.type) {
    case '@note/created':
      return state.concat(action.payload);
    case '@note/toggle_important':
      const { id } = action.payload;
      return state.map(note => {
        if (note.id === id) {
            return {
                ...note,
                important: !note.important
            }
          
        }
        return note;
      });

    default:
      return state;
  }
};
