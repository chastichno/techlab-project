import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { connect } from 'react-redux';
import { getNotes, deleteNote } from '../actions/noteActions';
import PropTypes from 'prop-types';

class NotesList extends Component {

    componentDidMount() {
        this.props.getNotes();
    };

    onDeleteClick = (id) => {
        this.props.deleteNote(id);
    };


    render() {
        const { notes } = this.props.note;
        const { isAuthenticated, user } = this.props.auth;
        // console.log("user= ", user);
        // console.log("notes= ", notes);
        // const new_user = JSON.stringify(user);
        // const new_user2 = JSON.parse(new_user)
        // console.log("print=", new_user2["name"]);


        return (
            <Container>
                <ListGroup>
                    {/* <span>{user ? user._id : ''}</span> */}
                    <TransitionGroup className="notes-list">
                        {!user ? '' :
                            notes
                                .filter(note => note.user === user._id)
                                .map(({ _id, title, date, prompt }) => (
                                    <CSSTransition key={_id} timeout={500} classNames="fade">
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>
                                                    <Button
                                                        className="remove-btn"
                                                        color="danger"
                                                        size="sm"
                                                        onClick={this.onDeleteClick.bind(this, _id)}
                                                    >&times;</Button>
                                                </Col>
                                                <Col>{title}</Col>
                                                <Col>{date}</Col>
                                                <Col>{prompt}</Col>
                                                <Col><Button>View</Button></Col>
                                            </Row>
                                        </ListGroup.Item>
                                    </CSSTransition>
                                ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    };
};

NotesList.propTypes = {
    getNotes: PropTypes.func.isRequired,
    note: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    note: state.note,
    auth: state.auth
})

export default connect(mapStateToProps, { getNotes, deleteNote })(NotesList);