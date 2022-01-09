import ProductList from '../components/ProductList/ProductList'

const dummyProducts = [
  {
    name: 'keyboard',
    description: 'this is a keyboard',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcHV0ZXIlMjBrZXlib2FyZHxlbnwwfHwwfHw%3D&w=1000&q=80'
  },
  {
    name: 'mouse',
    description: 'this is a mouse',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/22/3-Tasten-Maus_Microsoft.jpg'
  },
  {
    name: 'mousepad',
    description: 'this is a mousepad',
    image: 'https://thermaltake.azureedge.net/pub/media/catalog/product/cache/6bf0ed99c663954fafc930039201ed07/l/2/l20mousepad01.jpg'
  },
]

const Home = () => {
  return (
    <>
      <ProductList item={dummyProducts} />
    </>
  )
}

export default Home;
