import React from "react";

import {TasksFilter, TasksFilterClear} from "./TasksFilter";
import PropTypes from "prop-types";



const Footer = ({activeItem,onClearCompleted,
                    onFilterChange,filter}) => {

    Footer.propTypes = {
        onClearCompleted: PropTypes.func.isRequired,
        onFilterChange: PropTypes.func.isRequired,
        filter: PropTypes.bool.isRequired,
        activeItem: PropTypes.func.isRequired,
    };

    return (
        <footer className="footer">
            <span className="todo-count">{activeItem} items left</span>
            <TasksFilter
                filter={filter}
                onFilterChange={onFilterChange}/>
        <TasksFilterClear
                className = "clear-completed"
                label = "Clear Completed"
                onClearCompleted={onClearCompleted}/>
         </footer>
    );
};

export default Footer;