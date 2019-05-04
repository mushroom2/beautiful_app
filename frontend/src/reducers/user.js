export const initialState = {
  user: '',
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USERNAME':
      console.log(action.payload);
      return { ...state, user: action.payload };

    default:
      return state
  }
}
