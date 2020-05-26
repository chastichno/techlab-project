import React, { Component } from "react";
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import { v1 as uuid } from 'uuid';
import { connect } from 'react-redux';
import { getTasks, deleteTask } from '../actions/taskAction';
import PropTypes from 'prop-types';

class TasksList extends Component {

    componentDidMount() {
        this.props.getTasks();
    };

    onDeleteClick = (id) => {
        this.props.deleteTask(id);
    };

    render() {
        const { tasks } = this.props.task;
        return (
            <Container>
                {/* <Button
                    color="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={() => {
                        const name = prompt('Enter Task');
                        if (name) {
                            this.setState(state => ({
                                 tasks: [...state.tasks, { id: uuid(), name }]
                            }));
                        };
                    }}
                >Add Task</Button> */}
                <ListGroup>
                    <TransitionGroup className="tasks-list">
                        {tasks.map(({ _id, name }) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={this.onDeleteClick.bind(this, _id)}
                                    >&times;</Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    };
};

TasksList.propTypes = {
    getTasks: PropTypes.func.isRequired,
    task: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    task: state.task
})

export default connect(mapStateToProps, { getTasks, deleteTask })(TasksList);