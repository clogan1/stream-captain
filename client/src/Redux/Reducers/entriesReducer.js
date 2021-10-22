const initialEntries = {
    entries: []
  };

  export function entriesReducer(state = initialEntries, action) {
    switch (action.type) {
      case "SET_MY_ENTRIES": {
        return {
          ...state,
          entries: action.payload
        }
      }

      case "CLEAR_ENTRIES": {
        return {
          ...state,
          entries: []
        }
      }

      case "ADD_ENTRY": {
        return {
          ...state,
          entries: [action.payload, ...state.entries]
        }
      }

      case "EDIT_ENTRY": {
        const newEntries = state.entries.map(entry => {
            if(entry.id === action.payload.id){
              return action.payload
            }
            else return entry
          })
        return {
            ...state,
            entries: newEntries
            }
      }

      case "DELETE_ENTRY": {
        const newEntries = state.entries.filter(entry => entry.id !== action.payload.id)
      return {
          ...state,
          entries: newEntries
          }
      }

      default:
        return state;
    }   
  }