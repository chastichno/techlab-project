import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import AppNavbar from "../components/AppNavbar";
import NewNoteForm from "../components/NewNoteForm";

class NewNotePage extends Component {
    render() {
        return (
            <div>
                <AppNavbar />
                <NewNoteForm />
            </div>
        );
    }
};

export default NewNotePage;
