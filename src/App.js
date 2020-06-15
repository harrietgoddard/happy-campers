import React from 'react';
import './App.css';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import TempForm from './components/TempForm/TempForm';
import TempListing from './components/TempListing/TempListing';




function App() {
    return (
        <div className="App">

            <Router>
                <Switch>
                    <Route exact path="/">
                        <TempForm />
                    </Route>

                    <Route exact path="/campsites">
                        <TempListing />
                    </Route>

                    <Route exact path="/components">
                        {/**
                         * Components and style guide development go here
                         *
                         * e.g.
                         *
                         * <Button />
                         * <ListGroup>
                         *      <ListItem />
                         * </ListGroup>

                         */}
                    </Route>

                    <p>404 error. Site not found. </p>

                </Switch>
            </Router>

        </div>
    );
}

export default App;
