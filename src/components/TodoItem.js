import React, {Component} from 'react';
import PropTypes from 'prop-types';

// <div style={{backgroundColor: '#f4f4f4'}}>...</div>
// <div style={itemStyle}>...</div>
class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    };

    // // If you are not use arrow function, you will need to do the .bind:
    // // onChange={this.markComplete.bind(this)}
    // markComplete(e) {
    //     console.log(this.props) // No error in console.
    // }

    // // onChange={this.markComplete}
    // markComplete = (e) => {
    //     console.log(this.props) // No error in console.
    // };

    // // If you don't use Destructuring objects
    // onChange={this.props.markComplete.bind(this, this.props.todo.title)}

    render() {
        const {id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
                    {' '}
                    { title }
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        );
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
};

// const itemStyle = {
//     backgroundColor: '#f4f4f4'
// };

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem;
