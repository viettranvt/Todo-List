import React from 'react';
import PropTypes from 'prop-types';

TodoItem.propTypes = {
  onTodoClick: PropTypes.func,
  todo: PropTypes.object,
};

TodoItem.defaultProps = {
  onTodoClick: null,
  todo: {},
};

function TodoItem(props) {
  const { onTodoClick, todo } = props;

  const handleTodoClick = (todo) => {
    if (onTodoClick) onTodoClick(todo);
  };

  return (
    <li className={todo.completed ? 'done' : ''}>
      {todo.title}
      {!todo.completed && (
        <button
          onClick={() => {
            handleTodoClick(todo);
          }}
        >
          Delete
        </button>
      )}
    </li>
  );
}

export default React.memo(TodoItem);
