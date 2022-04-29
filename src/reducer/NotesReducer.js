export const initialState = [
  {id: 1, title: 'Note 1', content: 'Note 1 content'},
];

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
    case 'UPDATE':
      return state.map(item => {
        if (item.id === payload.id) {
          return {
            ...item,
            title: payload.title,
            content: payload.content,
          };
        }
        return item;
      });
    default:
      return state;
  }
};
