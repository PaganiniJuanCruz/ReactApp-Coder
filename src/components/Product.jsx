import ItemCount from './ItemCount';

const Product = ({id, name, price, stock}) => {
    return (
        <div id={id}>
            <h6 className="">{name}</h6>
            <p>{price}</p>
            <ItemCount stock={stock} />
        </div>
    )
}

export default Product;