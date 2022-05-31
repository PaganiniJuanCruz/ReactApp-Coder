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
                <button>Add to cart</button>
        </>
    )
}

export default ItemCount;
