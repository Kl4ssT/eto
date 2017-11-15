import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import InfiniteScroll from 'react-infinite-scroller';

import UserBlock from '../UserBlock';

import * as searchActions from '../../actions/search';

import './UserList.scss';

class UserList extends Component
{
    constructor(props)
    {
        super(props);

        this._loadMore = this._loadMore.bind(this);
        this._hasMore = this._hasMore.bind(this);
    }

    _loadMore(page)
    {
        this.props.getUsers(this.props.search.page);
    }

    _hasMore()
    {
        return (this.props.users.count < this.users.items.length);
    }

    render()
    {
        const { count, items } = this.props.users;

        if (count == 0)
            return (
                <h3 className="title-empty">Ничего не найдено</h3>
            );

        return (
            <InfiniteScroll
                pageStart={0}
                hasMore={this._hasMore}
                loadMore={this._loadMore}
                loader={<div>Загрузка</div>}
                className="user-list"
            >
                {items.map((user, index) => <UserBlock key={index} className="user-list__user" user={user} />)}
            </InfiniteScroll>
        );
    }
}

export const mapStateToProps = state => {
    return {
        users: state.users,
        search: state.search
    };
}

export const mapDispatchToProps = dispatch => bindActionCreators(searchActions, dispatch);

export default UserList;