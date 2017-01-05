import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="home-page">
                <h1>The app is now using Redux</h1>
                <p>
                    This is a test application for the study of the use of <strong>Redux</strong> for building SPA applications.
                    For a better understanding of those details, see the <a href="https://github.com/SmokyAce/react-ru-redux">Github documentation</a> for this app.
                </p>
            </div>
        );
    }
}

export default Home;
