export const filterReducer = (state = 'ALL', action) => {
    switch (action.type) {
        case '@filter/change_toggle_important':
/*           const { filter } = action.payload;
          if (filter === "ALL") {
            return state;
          }
          return state.filter(note => {
           if (note.id === filter) {
              return {
                ...note
              };
            } 
            return note;
          }); */
          return state;
        default:
          return state;
      }
};

export const change_toggleImportanceOf = filter => {
    return {
      type: '@note/change_toggle_important',
      payload: {
        filter,
      },
    };
  };
