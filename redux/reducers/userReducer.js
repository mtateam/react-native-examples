const INITIAL_STATE = {
  name: '',
  loggedIn: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {...state, name: action.username, loggedIn: true};
    case 'RESET_USER':
      return INITIAL_STATE;
    default:
      return state;
  }
};
export default userReducer;
