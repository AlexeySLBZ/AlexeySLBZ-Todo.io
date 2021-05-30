import React from 'react';

import Task from './Task';
import PropTypes from 'prop-types';

const TaskList = ({
  todos, onDeletedId, onActiveCounter, onLabelChange, 
}) => {
  console.log(todos)
  TaskList.propTypes = {
    onDeletedId: PropTypes.func.isRequired,
    onActiveCounter: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.object),
  };

  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;
    console.log (id)
    return (
      <Task
        {...item}
        key={item.id}
        onDeleted={() => onDeletedId(id)}
        onActiveCounter={() => onActiveCounter(id)}
        onLabelChange={onLabelChange}
      />
    );
  });

  return <ul className="todo-list">{elements}</ul>;
};
export default TaskList;
