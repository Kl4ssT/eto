import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../../store';

import Main from '../../containers/Main';
import Profile from '../../containers/Profile';

class App extends Component
{
    render()
    {
        return(
            <div className="app">
                <Provider store={store}>
                    <Router>
                        <div>
                            <Route exact path="/" component={Main} />
                            <Route path="/profile/:id" component={Profile} />
                        </div>
                    </Router>
                </Provider>
            </div>
        );
    }
}

export default App;