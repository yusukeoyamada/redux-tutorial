const todo = (state = 0, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text
      };
    default:
      return state;
  }
}

const todos = (state = [], action) => {
  switch(action.type){
    case 'ADD_TODO':
      return [
        ...state,
        todo(action)
      ]
    default:
      return state;
  }
}
export default todos;
