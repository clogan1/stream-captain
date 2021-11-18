// user 
  //fetch user if saved in cookies
  export function getLoggedInUser(){
    return (dispatch, getState) => {
        fetch('/me')
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    dispatch( {type: "GET_LOGGED_IN_USER", payload: user })
                    fetch( `/myentries`)
                    .then(res => res.json())
                    .then(entries =>{
                      dispatch( {type: "SET_MY_ENTRIES", payload: entries })
                    })
                  })
                }
            })
      }
  }


  // log user out
  export function logOutUser(){
    return (dispatch, getState) => {
          dispatch( {type: "LOG_OUT_USER" } )
          dispatch( {type: "CLEAR_ENTRIES" } )
      }
  }

  //log in user 
  export function logInUser(user){
    return (dispatch, getState) => {
      dispatch( {type: "LOG_IN_USER", payload: user })
      fetch(`/myentries`)
      .then(res => res.json())
      .then(entries =>{
        dispatch( {type: "SET_MY_ENTRIES", payload: entries})
      })
      }
  }

  //sign in/up new user
  export function signUpUser(user){
    return (dispatch, getState) => {
      dispatch( {type: "SIGN_UP_USER", payload: user })
      }
  }


// entries

export function addEntry(entry) {
    return (dispatch, getState) => {
      dispatch({ type: "ADD_ENTRY", payload: entry})
    }
  }

  export function updateEntry(entry) {
    return (dispatch, getState) => {
      dispatch({ type: "EDIT_ENTRY", payload: entry})
    }
  }

  export function deleteEntry(entry) {
    return (dispatch, getState) => {
      dispatch({ type: "DELETE_ENTRY", payload: entry})
    }
  }

  export function entriesOldest(){
    return(dispatch, getState) => {
      fetch(`/myentries_oldest`)
      .then(res => res.json())
      .then(entries =>{
        dispatch( {type: "GET_ENTRIES_OLDEST", payload: entries})
      })
    }
  }

  export function entriesNewest(){
    return(dispatch, getState) => {
      fetch(`/myentries`)
      .then(res => res.json())
      .then(entries =>{
        dispatch( {type: "SET_MY_ENTRIES", payload: entries})
      })
    }
  }

  // Streamers

  export function getStreamers() {
    return (dispatch, getState) => {
      fetch('/streamers')
        .then(res => res.json())
        .then(streams => {
          dispatch({ type: "SET_STREAMERS", payload: streams})
        })
    }
  }

  // Statuses
  export function getStatuses() {
    return (dispatch, getState) => {
      fetch('/statuses')
        .then(res => res.json())
        .then(stats => {
          dispatch({ type: "SET_STATUSES", payload: stats})
        })
    }
  }