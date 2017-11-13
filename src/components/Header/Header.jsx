import React from 'react';

import Search from '../Search';

const Header = props => {
    return (
        <header className="header">
            <section className="header__logo">Тестовое задание</section>
            <Search getUsers={props.getUsers} />
        </header>
    );
};

export default Header;