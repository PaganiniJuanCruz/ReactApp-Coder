import ItemCount from './ItemCount';

const Item = ({id, name, price, stock, image}) => {
    return (
        <div id={id}>
            <h6>{name}</h6>
            <p>{stock}</p>
            <p>{price}</p>
            <img src={image} className="img-size" />
            <ItemCount stock={stock} />
        </div>
    )
}

export default Item;