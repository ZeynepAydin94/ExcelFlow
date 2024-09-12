export const loginUser = (userData) => {
    return {
      type: 'SET_USER',
      payload: userData,
    };
  };
  
  export const logoutUser = () => {
    return {
      type: 'LOGOUT',
    };
  };