import Item from './Item';

const ItemList = ({ items }) => {
    return (<div>
        {items.map(item => {
            return <Item key={item.id} name={item.name} stock={item.stock} image={item.image} category={item.category} />
        })}
    </div>
    )
}

export default ItemList;