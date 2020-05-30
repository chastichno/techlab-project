import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addNote } from '../actions/noteActions';
import PropTypes from 'prop-types';

const prompts = [
    "Your favorite childhood vacation.",
    "Turn one of the last texts you sent into a story.",
    "Two friends have a disagreement.",
    "Write about the last thing/person that made you smile.",
    "Write a letter to your 14-year old self.",
    "Write about your first job.",
    "Do you like to be alone or with company?",
    "Describe how you think your grandparents met.",
    "Go to Twitter or Facebook and write about the first post you see.",
    "You wake up today with the superpower of your choosing.",
    "It’s June 13th, the snow won’t stop falling.",
    "Write about someone you admire."
];

class NewNoteForm extends Component {


    static propTypes = {
        auth: PropTypes.object.isRequired
    };


    state = {
        user: '',
        title: '',
        body: '',
        prompt: ''
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { isAuthenticated, user } = this.props.auth;
        // console.log(user._id);

        const newNote = {
            user: user._id,
            title: this.state.title,
            body: this.state.body,
            prompt: this.state.prompt
        }

        //Add item via AddTask action
        this.props.addNote(newNote);

        // window.location.href = "/dashboard";

    };
    newPrompt = (e) => {
        let numberOfPrompt = Math.floor(Math.random() * (prompts.length));
        console.log(prompts[numberOfPrompt]);
        this.setState({
            prompt: prompts[numberOfPrompt]
        });
    };

    render() {


        return (

            <div>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="note">Write a new note</Label>
                        {/* {user ? user._id : ''} */}
                        {/* <Input
                            type="hidden"
                            name="user"
                            id="user"
                            placeholder="user"
                            value={user ? user._id : ''}
                            onChange={this.onChange}
                        /> */}
                        <div className="prompt">
                            {this.state.prompt}
                        </div>
                        <Button onClick={this.newPrompt}>New prompt</Button>
                        <Input
                            type="text"
                            name="title"
                            id="title"
                            placeholder="Title"
                            onChange={this.onChange}
                        />
                        <Input
                            type="text"
                            name="body"
                            id="body"
                            placeholder="Start writing"
                            onChange={this.onChange}
                        />
                        <Button
                            color="dark"
                            style={{ marginTop: '2rem' }}
                            block
                        >Finish writing
                                </Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
};

const mapStateToProps = state => ({
    note: state.note,
    auth: state.auth
});

export default connect(mapStateToProps, { addNote })(NewNoteForm);