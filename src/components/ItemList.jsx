import Item from './Item';
import styled from "styled-components"

const ItemList = ({ items }) => {
    return (
        <ItemContainer>
        <div className='container'>
        {items.map(item => {
            return <Item key={item.id} name={item.name} stock={item.stock} image={item.image} category={item.category} />
        })}
        </div>
        </ItemContainer>
    )
}

export default ItemList;

const ItemContainer = styled.div`
    .container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`