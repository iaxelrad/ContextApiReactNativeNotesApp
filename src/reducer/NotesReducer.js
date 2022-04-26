export const initialState = [];

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, {title: `title${state.length + 1}`}];

    default:
      return state;
  }
};
