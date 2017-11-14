import React from 'react';
import { Link } from 'react-router-dom';

import Search from '../Search';

import './Header.scss';

const Header = props => {
    return (
        <header className="header">
            <section className="header__logo">Тестовое задание</section>
            <Search getUsers={props.getUsers} className="header__search" />
        </header>
    );
};

export default Header;