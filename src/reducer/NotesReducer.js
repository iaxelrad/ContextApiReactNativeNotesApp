export const initialState = [];

export const reducer = (state, {type, payload}) => {
  switch (type) {
    case 'ADD':
      return [
        ...state,
        {
          id: Math.random(),
          title: payload.title,
          content: payload.content,
        },
      ];
    case 'DELETE':
      return state.filter(item => item.id !== payload);
    default:
      return state;
  }
};
