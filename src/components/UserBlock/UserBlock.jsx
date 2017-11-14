import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import './UserBlock.scss';

const UserBlock = props => {
    const { className, user } = props;

    return (
        <Link to={"/profile/" + user.id} className={classnames('user-block', className)}>
            <span className="user-block__avatar">
                <img src={user.has_photo ? user.photo_200 : 'https://pp.userapi.com/c624118/v624118001/9aa0/rSo7H2H6dVg.jpg'} alt="" />
                {user.online ? <span className="user-block__online"></span> : null}
            </span>
            <span className="user-block__name">{`${user.first_name} ${user.last_name}`}</span>
        </Link>
    );
};

export default UserBlock;