import React from "react";
import PropTypes from "prop-types";

const filterButtons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'completed', label: 'Completed' },
];


const TasksFilter = ({ filter, onFilterChange }) => {

    TasksFilter.propTypes = {
        onFilterChange: PropTypes.func.isRequired,
        filter: PropTypes.bool.isRequired,
    };

    const buttons = filterButtons.map(({ name, label}) => {

        const isActive = name === filter;
        const classNames = `${isActive ? 'selected' : ''}`;

        return (
            <li>
                <button
                    key={name}
                    className={classNames}
                    onClick={() => {
                        onFilterChange(name);
                    }}
                    type="submit"
                >
                    {label}
                </button>
            </li>
        );
    });
    return <ul className="filters">{buttons}</ul>;
};

const TasksFilterClear =({onClearCompleted, label}) => {
        return (
            <button
                className = 'clear-completed'
                onClick = {()=>onClearCompleted()}>
                {label}
            </button>
        );
};

export {TasksFilter, TasksFilterClear}
