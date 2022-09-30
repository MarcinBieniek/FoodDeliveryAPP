import React from 'react';
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import { getAllDishes } from '../../../redux/dishesRedux';
import { getBreakfastDishes } from '../../../redux/dishesRedux';

import SingleProduct from '../SingleProduct/SingleProduct';

import Row from 'react-bootstrap/Row';

const ProductList = () => {

    const dishes = useSelector(state => getAllDishes(state))
    const breakfastDishes = useSelector(state => getBreakfastDishes(state))

    console.log(breakfastDishes)

    return (
        <Container>
            <Row>
                {breakfastDishes.map(breakfastDish => 
                    <div key={breakfastDish.id} className='col col-12 col-md-3 col-lg-3'>
                        <SingleProduct {...breakfastDish} /> 
                    </div>
                )}
            </Row>
        </Container>     
    )
}

export default ProductList;

