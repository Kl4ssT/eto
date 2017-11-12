import React from 'react';

import Search from '../Search';

const Header = props => {
    return (
        <header className="header">
            <section className="header__logo">Тестовое задание</section>
            <Search />
        </header>
    );
};

export default Header;