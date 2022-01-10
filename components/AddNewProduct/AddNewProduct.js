import React from 'react';
import classes from './AddNewProduct.module.css';

const AddNewProduct = ({productData}) => {
    const [name, setName] = React.useState('');
    const [imageUrl, setImageUrl] = React.useState('');
    const [description, setDescription] = React.useState('');
    const onSubmit = () => {
        let data = {
            name,
            imageUrl,
            description
        }
        productData(data)   
    }

    return (
        <div className={classes.container}>
            <center><h3>Add a new product</h3></center>
            Name: <input type='text' value={name} onChange={(e) => setName(e.target.value)} /> <br /><br />
            Image url: <input type='url' value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} /> <br /><br />
            Description: <br/>
            <textarea className={classes.textArea} value={description} onChange={(e) => setDescription(e.target.value)}/> <br />
            <button onClick={onSubmit}>Submit</button>
        </div>
    )
}

export default AddNewProduct;