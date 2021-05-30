import React, { useState } from 'react';
import NewTaskForm from '../NewTaskForm';

import './App.css';
import TaskList from '../TaskList';
import Footer from '../Footer';

let maxId = 100;

const App = () => {


  const createTodoItem = (label) => {
    return {
      label,
      done: false,
      id: maxId++,
      time: Date.now(),
      checked: false,
      editing: false,
    };
  };

  const [stateTodoData, setTodoData] = useState({

    todoData: [createTodoItem('Completed task1')],
    filter: 'all',
  });

  const { todoData, filter } = stateTodoData
  const { time } = todoData

  const deleteItem = (id) => {
    setTodoData(() => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return {
        todoData: newArray,
      };
    });
    console.log("deleteItem:",todoData)
  };

  const addItem = (text) => {
    const newItem = createTodoItem(text);

    setTodoData((s) => {

      const newArr = [...todoData, newItem];
      console.log (newArr)
      return { todoData: newArr };
    });
  };

  const onActiveCounter = (id) => {
    setTodoData(() => {
      const idx = todoData.findIndex((el) => el.id === id);

      const oldItem = todoData[idx];
      const newItem = {
        ...oldItem,
        done: !oldItem.done,
        checked: !oldItem.checked,
      };

      const newArray = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1),
      ];

      return {
        todoData: newArray,
      };
    });
  };

  const onEditToggle = (id) => {
    setTodoData(() => {
      const idx = todoData.findIndex((el) => el.id === id);

      const oldItem = todoData[idx];
      const newItem = {
        ...oldItem,
        editing: !oldItem.editing,
      };

      const newArray = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1),
      ];

      return {
        todoData: newArray,
      };
    });
  };

  const onLabelChange = (id, label) => {
    onEditToggle(id);
    setTodoData((stateTodoData) => {
      const element = stateTodoData.todoData.findIndex((el) => el.id === id);
      const item = { ...stateTodoData.todoData[element], label };
      const items = [
        ...stateTodoData.todoData.slice(0, element),
        item,
        ...stateTodoData.todoData.slice(element + 1),
      ];
      return { todoData: items };
    });
  };

  const onClearCompleted = () => {
    setTodoData(() => {
      const newArray = todoData.filter((el) => el.done === false);
      return { todoData: newArray };
    });
  };

  const onFilterChange = (filterAny) => {
    setTodoData(filterAny);
  };

  const filterToDos = (todos, filterAny) => {
    if (filterAny === 'all') return todos;
    if (filterAny === 'active') {
      return todos.filter((todo) => !todo.done);
    }
    if (filterAny === 'completed') {
      return todos.filter((todo) => todo.done);
    }
    return todos;
  };

  const visibleItems = filterToDos(todoData, filter);
  const doneItem = todoData.filter((el) => el.done).length;
  const activeItem = todoData.length - doneItem;

  return (
    <section className="todoapp">
      <NewTaskForm activeItem={activeItem} onItemAdd={addItem} />
      <TaskList
        time={time}
        todos={visibleItems}
        onDeletedId={deleteItem}
        onActiveCounter={onActiveCounter}
        onLabelChange={onLabelChange}
      />
      <Footer
        filter={filter}
        activeItem={activeItem}
        onClearCompleted={onClearCompleted}
        onFilterChange={onFilterChange}
      />
    </section>
  );
}
export default App
