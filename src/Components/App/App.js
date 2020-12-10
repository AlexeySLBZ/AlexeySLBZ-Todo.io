import React from 'react';
import NewTaskForm from "../NewTaskForm";

import './App.css'
import TaskList from "../TaskList";
import Footer from "../Footer";


export default class App extends React.Component {

    maxId = 100;
    state = {
        todoData: [
            this.createTodoItem("Completed task1"),
            this.createTodoItem("Completed task2"),
            this.createTodoItem("Completed task3"),
        ],
        filter: 'all',
    };

    createTodoItem (label) {
        return {
            label,
            done: false,
            id: this.maxId++,
            time: Date.now(),
            checked: false,
            editing: false
        };
    };

    deleteItem = (id) =>{

        this.setState(({todoData})=>{

            const idx = todoData.findIndex((el)=>el.id===id);
            const newArray = [...todoData.slice(0,idx),...todoData.slice(idx+1)];
           return {
               todoData:newArray
           };

        });

    };

    addItem = (text)=>{
         const newItem = this.createTodoItem(text);

         this.setState(({todoData})=>{
            const newArr = [
                ...todoData,
                newItem
            ];
             return {todoData: newArr}

         });
    };

    onItemEditButton = (id) => {
        this.setState((state) => {
            const items = this.onEditToggle(id);
            return { items };
        });
    };

    onLabelChange = (id, label) => {
        this.onItemEditButton(id);
        this.setState((state) => {
            const element = state.todoData.findIndex((el) => el.id === id);
            const item = { ...state.todoData[element], label };
            const items = [...state.todoData.slice(0, element), item, ...state.todoData.slice(element + 1)];
            return { todoData: items };
        });
    };

    onActiveCounter = (id) => {

        this.setState(({ todoData })=>{
            const idx = todoData.findIndex((el)=>el.id===id);

            const oldItem = todoData[idx];
            const newItem = {
                ...oldItem,
                done: !oldItem.done,
                checked: !oldItem.checked,

            };


            const newArray = [...todoData.slice(0,idx),
                newItem,
                ...todoData.slice(idx+1)
            ];

            return {
                todoData:newArray
            };
        });

    };

    onEditToggle = (id) => {

        this.setState(({ todoData })=>{
            const idx = todoData.findIndex((el)=>el.id===id);

            const oldItem = todoData[idx];
            const newItem = {
                ...oldItem,
                editing: !oldItem.editing,
            };

            const newArray = [...todoData.slice(0,idx),
                newItem,
                ...todoData.slice(idx+1)
            ];

            return {
                todoData:newArray
            };
        });

    };

    onClearCompleted = () => {
        this.setState(({todoData})=> {
            const newArray = todoData.filter(el => el.done === false);
            console.log("clearCompleted", newArray)
            return ({todoData: newArray});
        });
    };

    onFilterChange = (filter) => {
        this.setState({filter});
        console.log("filter",filter)

    }

    filterToDos = (todos, filter) => {
        if (filter === 'all'){
            return todos;
        }
        if (filter === 'active'){
            return todos.filter(todo => !todo.done)
        }
        if (filter === 'completed'){
            return todos.filter(todo => todo.done)
        }
    }

    render() {

        const { todoData, filter, time } = this.state;
        const visibleItems = this.filterToDos(todoData, filter)
        const doneItem = todoData.filter((el)=> el.done).length;
        const activeItem = todoData.length-doneItem;

        return(
            <section className="todoapp">
                <NewTaskForm
                    activeItem={activeItem}
                    onItemAdd = {this.addItem}/>
                <TaskList
                    time={time}
                    todos = {visibleItems}
                    onDeletedId={this.deleteItem}
                    onActiveCounter={this.onActiveCounter}
                    onLabelChange={this.onLabelChange}
                    onItemEditButton={this.onItemEditButton}/>




                <Footer
                    filter = {filter}
                    activeItem={activeItem}
                    onClearCompleted={this.onClearCompleted}
                    onFilterChange={this.onFilterChange}/>
            </section>
        );
    };

};