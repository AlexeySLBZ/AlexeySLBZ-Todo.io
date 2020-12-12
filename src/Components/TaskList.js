import React from 'react';

import Task from './Task';
import PropTypes from 'prop-types';

const TaskList = ({
  todos, onDeletedId, onActiveCounter, onLabelChange, 
}) => {
  TaskList.propTypes = {
    onDeletedId: PropTypes.func.isRequired,
    onActiveCounter: PropTypes.func.isRequired,
    todos: PropTypes.object.isRequired,
  };

  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;

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
