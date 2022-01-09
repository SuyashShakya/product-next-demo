import React from 'react';
import classes from './ProductItem.module.css';

const ProductItem = ({item}) => {
    return (
        <div className={classes.card}>
            <img src={item.image} alt={item.name} width={300} height={200}/>
            <div>
                Name: {item.name} <br />
                Description: {item.description}
            </div>
        </div>
    )
}

export default ProductItem;