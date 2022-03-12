const initialState = [
  {
    content: 'bienvenidos a la app',
    important: true,
    id:1
  },
  {
    content: 'gracias por esta poc',
    important: false,
    id:2
  }
];
export const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case '@note/created':
      return state.concat(action.payload);
    case '@note/toggle_important':
      const { id } = action.payload;
      return state.map(note => {
        if (note.id === id) {
          return {
            ...note,
            important: !note.important,
          };
        }
        return note;
      });

    default:
      return state;
  }
};

const generateId = () => Math.floor(Math.random() * 999999999) + 1;

export const createNote = content => {
  return {
    type: '@note/created',
    payload: {
      content,
      important: false,
      id: generateId(),
    },
  };
};

export const toggleImportanceOf = id => {
  return {
    type: '@note/toggle_important',
    payload: {
      id,
    },
  };
};
