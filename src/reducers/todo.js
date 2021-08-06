import uuid from 'react-uuid';

const initialState = {
  list: [
    { id: uuid(), title: 'Pay Bills', completed: true },
    { id: uuid(), title: 'Learn ReactJS', completed: false },
    { id: uuid(), title: 'Learn NodeJS Express', completed: true },
    { id: uuid(), title: 'Learn PassportJS', completed: false },
    { id: uuid(), title: 'Complete Final Project', completed: false },
    { id: uuid(), title: 'Have Dinner', completed: false },
    { id: uuid(), title: 'Complete Final Project', completed: false },
  ],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK': {
      const newTodoList = [...state.list];
      newTodoList.push(action.payload);

      return {
        list: newTodoList,
      };
    }
    case 'DONE_TASK': {
      const newTodoList = [...state.list];
      const todoIndex = newTodoList.findIndex(
        (td) => action.payload.id === td.id
      );

      if (todoIndex > 0) {
        newTodoList[todoIndex].completed = true;
      }

      return {
        list: newTodoList,
      };
    }
    default:
      return state;
  }
};

export default todoReducer;
