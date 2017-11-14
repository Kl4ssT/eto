import React, { Component } from 'react';

import Header from '../../components/Header';
import UserList from '../../components/UserList';

import './Main.scss';

class Main extends Component
{

    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div className="main">
                <Header />
                <div className="main__content">
                    <UserList />
                </div>
            </div>
        );
    }
}

export const mapStateToProps = state => {
    return {
        users: state.users
    };
}

export default Main;