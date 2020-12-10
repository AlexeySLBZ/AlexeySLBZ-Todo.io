import React,{Component} from "react";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import PropTypes from 'prop-types';

export default class Task extends Component{
    static propTypes = {
        onDeleted: PropTypes.func.isRequired,
        onActiveCounter: PropTypes.func.isRequired,
        checked: PropTypes.bool.isRequired,

        done: PropTypes.bool.isRequired,
        label: PropTypes.string.isRequired,
        classNames: PropTypes.string.isRequired,
    };
    tick() {
        console.log("tick")
         return formatDistanceToNow(this.props.time)

    }

    state = {
        label: '',
    };

    onLabelChange = (el) => {
        this.setState({
            label: el.target.value,
        });
    };

    onSubmit = (el) => {
        el.preventDefault();
        const { label } = this.state;
        this.setState({ label: '' });
        const cb = this.props.onLabelChange;
        cb(this.props.id, label);
    };


    // componentDidMount() {
    //     const {updateInterval} = this.props
    //     this.timerID = setInterval(() => this.tick(), updateInterval)
    // }
    //
    // componentWillUnmount() {
    //     clearInterval(this.timerID)
    // }

    render() {

        const {label,  onDeleted, onActiveCounter, done, checked, editing, onItemEditButton} = this.props;
        let classNames = ""
        if (done) {
            classNames += 'completed';
        };

        return (

            <li className={classNames}>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        onClick = {onActiveCounter}
                        checked = {checked}
                    />
                    <label >
                        {editing ? (
                            <form onSubmit={this.onSubmit}>
                                <input
                                    type="text"
                                    // className="edit"
                                    onChange={this.onLabelChange}
                                    autoFocus
                                    required
                                    placeholder={label}
                                    value={this.state.label || label}
                                />
                            </form>
                        ) : (
                            <span className="description">{label}</span>
                        )}
                        <span className="created">{this.tick()}</span>
                    </label>
                    <button className="icon icon-edit" onClick={onItemEditButton} type="submit">

                    </button>
                    <button type ='button'
                            className="icon icon-destroy"
                            onClick = {onDeleted}>

                    </button>
                </div>
            </li>
        );
    };
};



