// action - что хотим сделать со state
// action - обычный js объект с обязательным полем type, и другими кастомными полями
// если state === undefined, необходимо вернуть первоначальный initial state, можно указать по дефолту
const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'RND':
      return state + action.payload;
    case 'DEC':
      return state - 1;
    default: // не изменяем state если действие не распознано
      return state;
  }
};

export default reducer;