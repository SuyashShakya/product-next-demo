import {MongoClient} from 'mongodb'
import ProductList from '../components/ProductList/ProductList'
import {getClient} from '../utils/getCollection'

const Home = (props) => {
  return (
    <>
      <ProductList item={props.products} />
    </>
  )
}

export const getStaticProps = async () => {
  const client = await getClient({MongoClient});
  const db = client.db();
  const productCollection = db.collection('products');
    
  const products = await productCollection.find().toArray();

  client.close();
  return {
    props: {
      products: products.map(product => ({
        name: product.name,
        description: product.description,
        imageUrl: product.imageUrl,
        id: product._id.toString()
      }))
    },
    revalidate: 1
  }
}

export default Home;
