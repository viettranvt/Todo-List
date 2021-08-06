import React from 'react';
import TodoItem from '../TodoItem';
import PropTypes from 'prop-types';

TodoList.propTypes = {
  onTodoClick: PropTypes.func,
  todoList: PropTypes.array,
  title: PropTypes.string,
};

TodoList.defaultProps = {
  onTodoClick: null,
  todoList: [],
  title: '',
};

function TodoList(props) {
  const { onTodoClick, todoList, title } = props;

  const handleTodoClick = (todo) => {
    if (onTodoClick) onTodoClick(todo);
  };

  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {todoList.map((item) => (
          <TodoItem
            key={item.id}
            todo={item}
            onTodoClick={() => {
              handleTodoClick(item);
            }}
          />
        ))}
      </ul>
    </div>
  );
}

export default React.memo(TodoList);
