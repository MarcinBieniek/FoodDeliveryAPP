import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Header.module.scss';

import TopBar from '../TopBar/TopBar';
import MenuBar from '../MenuBar/MenuBar';

const Header = () => (

    <header className={styles.root}>
        <TopBar />
        <MenuBar />
    </header>
);

// Header.propTypes = {};

export default Header;
