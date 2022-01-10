import React from 'react';
import { useRouter } from 'next/router';
import classes from './ProductItem.module.css';

const ProductItem = ({item}) => {
    const router = useRouter()

    const showDetails = () => {
        router.push('/' + item.id)
    }
    return (
        <div className={classes.card}>
            <img src={item.imageUrl} alt={item.name} width={300} height={200}/>
            <div>
                Name: {item.name} <br />
                Description: {item.description} <br/> <br/>
                <button onClick={showDetails}>Show Detail</button>
            </div>
        </div>
    )
}

export default ProductItem;