import React, { useState } from 'react';
import PropTypes from 'prop-types';

AddTask.propTypes = {
  onSubmit: PropTypes.func,
  title: PropTypes.string,
};

AddTask.defaultProps = {
  onSubmit: null,
  title: '',
};

function AddTask(props) {
  const { onSubmit, title } = props;
  const [value, setValue] = useState('');

  const handleOnsubmit = (e) => {
    e.preventDefault();

    if (onSubmit && value !== '') {
      onSubmit(value);
      setValue('');
    }
  };

  const handleValueChange = (e) => setValue(e.target.value);

  return (
    <div>
      <h3>{title}</h3>
      <form onSubmit={handleOnsubmit}>
        <div className='fg'>
          <input type='text' value={value} onChange={handleValueChange} />
          {/* <button onClick={handleAddTaskClick}>Add</button> */}
        </div>
      </form>
    </div>
  );
}

export default AddTask;
