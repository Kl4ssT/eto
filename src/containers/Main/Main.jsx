import React, { Component } from 'react';

import Header from '../../components/Header';

import * as Actions from '../../actions';

class Main extends Component
{

    constructor(props)
    {
        super(props);

        this.getUsers = this.getUsers.bind(this);
    }

    getUsers(query)
    {
        this.props.dispatch(Actions.getUsers(query, 1));
    }

    render()
    {
        return (
            <div class="main">
                <Header getUsers={this.getUsers} />
                <div>
                    {this.props.users.map(user => {
                        return (
                            <div>
                                <img src={user.photo_50} />
                                <p>{user.first_name} {user.last_name}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export const mapStateToProps = state => {
    return {
        users: state.search.items
    };
}

/*export const mapDispatchToProps = dispatch => {
    return {

    }
}*/

export default Main;