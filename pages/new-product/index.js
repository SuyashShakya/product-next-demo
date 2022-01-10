import { useRouter } from 'next/router';
import React from 'react';
import AddNewProduct from '../../components/AddNewProduct/AddNewProduct';
import classes from '../../styles/new-product.module.css';

const NewProduct = () => {
  const router = useRouter()
  const addProductHandler = async (productData) => {
    const res = await fetch('/api/new-product', {
      method: 'POST',
      body: JSON.stringify(productData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    router.push('/')
  }
  return (
    <div className={classes.container}>
      <AddNewProduct productData={addProductHandler} />
    </div>
  )
}

export default NewProduct;
