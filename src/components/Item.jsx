import ItemCount from './ItemCount';
import styled from 'styled-components';
import ItemDetail from './ItemDetail';

const Item = ({id, name, price, stock, image}) => {
    return (
        <CardItem>
            <div className="container">
            <div className='card-container'>
                    <div id={id}>
                        <div className='image-container'>
                        <img src={image} className="img-size" alt="imagen"/>
                        </div>
                            <div className='card-content'>
                                <div className='card-name'>    
                                <h3>{name}</h3>
                                </div>
                                <ItemCount stock={stock} />
                                <ItemDetail />
                            </div>
                    </div>
            </div>
            </div>
        </CardItem>
    )
}

export default Item;

const CardItem = styled.div`
    .card-container{
        width: 300px;
        overflow: hidden;
        box-shadow: 0px 0px 15px -5px;
        transition: 0.3s;
        animation: ease-in-out;
        margin-top: 100px;
        margin-inline-end: 60px;
        margin-left: 30px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .card-container:hover{
        transform: scale(1.1);
        box-shadow: 0px 0px 15px 0px;
    }

    .image-container img{
        margin-top: 20px;
        overflow: hidden;
        height: 200px;
    }

    .card-content{
        margin: 1rem;
        margin-top: 0.5rem;  
    }

    h3, p{
        margin: 0;
        padding: 0;
    }

    .card-title{
        margin-bottom: 0.5rem;
    }
`