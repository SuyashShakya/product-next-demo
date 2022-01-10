import React from 'react';
import {MongoClient, ObjectId} from 'mongodb'
import {getClient} from '../../utils/getCollection';
import classes from '../../styles/productDetails.module.css'

const ProductDetails = (props) => {
    // const deleteProduct = async () => {
    //     const res = await fetch('/api/new-product', {
    //         method: 'DELETE',
    //         body: JSON.stringify({_id: ObjectId(props.id)}),
    //         headers: {
    //           'Content-Type': 'application/json'
    //         }
    //       });
    //       const data = await res.json();
    //       router.push('/')
    // }
    
    return (
        <div className={classes.container}>
            <img src={props.productData.imageUrl} alt={props.productData.name} /> <br />
            Name: {props.productData.name} <br />
            Description: {props.productData.description}<br />
            {/* <button onClick={deleteProduct}>Delete</button> */}
        </div>
    )
}

export const getStaticPaths = async () => {
    const client = await getClient({MongoClient});
    const db = client.db();
    const productCollection = db.collection('products');

    const productIds = await productCollection.find({}, {_id: 1}).toArray();

    client.close();

    return {
        fallback: false,
        paths: productIds.map((item) => ({
            params: {
                productId: item._id.toString()
            }
        }))
    }
}

export const getStaticProps = async (context) => {
    const productId = context.params.productId;

    const client = await getClient({MongoClient});
    const db = client.db();
    const productCollection = db.collection('products');

    const selectedProduct = await productCollection.findOne({_id: ObjectId(productId)})

    client.close();

    return {
        props: {
            productData: {
                id: selectedProduct._id.toString(),
                name: selectedProduct.name,
                imageUrl: selectedProduct.imageUrl,
                description: selectedProduct.description
            }
        }
    }
}

export default ProductDetails;