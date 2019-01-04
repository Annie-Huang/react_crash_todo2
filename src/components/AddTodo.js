import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
    state = {
        title: ''
    };

    // // this only allows you to do it on the title field:
    // onChange = (e) => this.setState({ title: e.target.value });
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    };

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input
                    type="text"
                    name="title"
                    style={{flex: '10', padding: '5px' }}
                    placeholder="Add Todo..."
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input type="submit" value="Submit" className="btn" style={{flex: '1'}} />
            </form>
        );
    }
}

AddTodo.propTypes = {};

export default AddTodo;