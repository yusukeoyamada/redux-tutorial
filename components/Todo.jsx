import React, { PropTypes } from 'react';

const Todo = ({text}) => {
  <li>
    {text}
  </li>
};

// propsのvalidate
Todo.propTypes = {
  text: PropTypes.string.isRequired
}

export default Todo;
