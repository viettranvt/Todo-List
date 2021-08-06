export const addTask = (todo) => {
  return {
    type: 'ADD_TASK',
    payload: todo,
  };
};

export const doneTask = (todo) => {
  return {
    type: 'DONE_TASK',
    payload: todo,
  };
};
