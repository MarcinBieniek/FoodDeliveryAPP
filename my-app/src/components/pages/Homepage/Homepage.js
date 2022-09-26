import React from 'react';
// import PropTypes from 'prop-types';

import Hero from '../../views/Hero/Hero';
import FindFoodBar from '../../features/FindFoodBar/FindFoodBar';
import ProductListHeader from '../../common/ProductListHeader/ProductListHeader';
import ProductList from '../../features/ProductList/ProductList';

const Homepage = () => {

    return (
        <>
            <Hero />
            <FindFoodBar />
            <ProductListHeader />
            <ProductList />
        </>
    );
};

// Homepage.propTypes = {}

export default Homepage;