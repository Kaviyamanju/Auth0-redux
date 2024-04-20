
const initialState = {
    isAuthenticated: false,
    userName: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          isAuthenticated: true,
          userName: action.payload,
        };
     
      default:
        return state;
    }
  };
  
  export default authReducer;
  