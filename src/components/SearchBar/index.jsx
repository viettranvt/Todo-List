import React, { useState } from 'react';
import PropTypes from 'prop-types';

SearchBar.propTypes = {
  title: PropTypes.string,
  onSubmit: PropTypes.func,
};

SearchBar.defaultProps = {
  title: '',
  onSubmit: null,
};

function SearchBar(props) {
  const { title, onSubmit } = props;
  const [value, setValue] = useState('');

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (onSubmit) {
      onSubmit({ value });
      setValue('');
    }
  };

  const handleOnchange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <label style={{ fontWeight: 'bold' }}>
        {title ? title : 'Filter tasks (by name)'}
        <form onSubmit={handleOnSubmit}>
          <div className='fg'>
            <input value={value} type='text' onChange={handleOnchange} />
            {/* <button onClick={handleButtonClick}>Filter</button> */}
          </div>
        </form>
      </label>
    </div>
  );
}

export default SearchBar;
