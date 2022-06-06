/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import styled from 'styled-components'

const ItemCount =  ({ stock }) => {
    const [ count, setCount ] = useState(0);

    const addProduct = () => {
        if( count < stock){
            setCount( count + 1 );
        }
        }

    const subtractProduct = () => {
        if ( count > 0 ){
            setCount( count - 1 )
        }
    }

    return(
        <> 
                <div className="btn">
                    <button className="btn-style"  onClick={ subtractProduct }>-</button>
                    <div> {count} </div>
                    <button className="btn-style" onClick={ addProduct }>+</button>
                </div>
                <ButtonAddToCart>
                    <div className="btn">
                        <button>Add to cart</button>
                    </div>
                </ButtonAddToCart>
        </>
    )
}

export default ItemCount;

const ButtonAddToCart = styled.div`
    .btn{
        display: flex;
        justify-content: center;
    }

    .btn button{
        padding: 0.5rem;
        background-color: white;
        border: none;
        transition: 0.2s;
        margin-bottom: 0.5rem;
        text-transform: uppercase;
        color: #1b9cfc;
        border-radius: 3px;
        text-decoration: none;
        font-weight: bold;
    }

    .btn button:hover{
        background-color: rgba(27, 156, 252, 0.1);
    }


`