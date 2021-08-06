import { createSlice } from '@reduxjs/toolkit';
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

const todo = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.list.push(action.payload);
    },
    doneTask: (state, action) => {
      const todoIndex = state.list.findIndex(
        (td) => action.payload.id === td.id
      );

      if (todoIndex > 0) {
        state.list[todoIndex].completed = true;
      }
    },
  },
});

const { reducer: todoReducer, actions } = todo;
export const { addTask, doneTask } = actions;
export default todoReducer;
