import Product from './Product';

const ProductList = ({ products }) => {
    return (<div>
        {products.map(product => {
            return <Product key={product.id} name={product.name} stock={product.stock} image={product.image} category={product.category} />
        })}
    </div>
    )
}

export default ProductList;