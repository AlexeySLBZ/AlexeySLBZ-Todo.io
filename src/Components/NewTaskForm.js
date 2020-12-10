import React,{ Component } from "react";

export default class NewTaskForm extends Component {
    state={
      label:""
    };
    onLabelChange = (e)=>{
        this.setState({label: e.target.value
        });
    };

    onSubmit = (e) => {

        e.preventDefault()
     this.props.onItemAdd(this.state.label)
        this.setState({
            label:''
        })

    };


    render() {

        return (
            <header className="header">
                <h1>todos</h1>
                <form
                onSubmit={this.onSubmit} >

                    <input type="text"
                        className="new-todo"
                        onChange={this.onLabelChange}
                        required
                        placeholder="What needs to be done?"
                        value={this.state.label}/>
                </form>
            </header>

        );
    };
};

