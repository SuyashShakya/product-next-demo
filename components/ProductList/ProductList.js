import Link from 'next/link';
import React from 'react';
import ProductItem from '../ProductItem/ProductItem';
import classes from './ProductList.module.css'

const ProductList = ({item}) => {
    return (
        <div className={classes.cardList}>
            {item.map((item, index) => (
                    <ProductItem item={item} />
            ))}
        </div>
    )
}

export default ProductList;