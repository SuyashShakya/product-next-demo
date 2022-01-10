import { MongoClient } from "mongodb";
import { getClient } from "../../utils/getCollection";

const handlers = async (req, res) => {
    if(req.method === 'POST') {
        const data = req.body;

        const client = await getClient({MongoClient});
        const db = client.db();

        const productCollection = db.collection('products');

        const result = await productCollection.insertOne(data);
    
        client.close();

        res.status(201).json({message: 'product inserted!'});
    }
    if(req.method === 'DELETE') {
        const data = req.body;
        const client = await getClient({MongoClient});
        const db = client.db();

        const productCollection = db.collection('products');
        const result = await productCollection.deleteOne({_id: data._id});
    
        client.close();
        res.status(201).json({message: 'product deleted!'});
    }
}

export default handlers;