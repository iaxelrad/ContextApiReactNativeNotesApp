export const initialState = [];

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, {id: Math.random(), title: `title${state.length + 1}`}];
    case 'DELETE':
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};
