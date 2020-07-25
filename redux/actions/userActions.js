const setUserAction = username => ({
  type: 'SET_USER',
  username,
});
const resetUserAction = () => ({
  type: 'RESET_USER',
});

export {setUserAction, resetUserAction};
