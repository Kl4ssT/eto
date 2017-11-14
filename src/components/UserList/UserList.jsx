import React, { Component } from 'react';

import UserBlock from '../UserBlock';

import './UserList.scss';

class UserList extends Component
{
    render()
    {
        const { users } = this.props;

        if (users.length == 0)
            return (
                <h3 className="title-empty">Ничего не найдено</h3>
            );

        return (
            <div className="user-list">
                {this.props.users.map((user, index) => <UserBlock key={index} className="user-list__user" user={user} />)}
            </div>
        );
    }
}

export const mapStateToProps = state => {
    return {
        users: state.users
    };
}

export default UserList;