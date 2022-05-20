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
        setCount ( count > 0 )
        if ( count > 0 ){
            setCount( count - 1 )
        }
    }

    return(
        <>
            <CardContainer>
                <div className="container">
                    <div className="image-container">
                        
                    </div>
                    <div className="card-content">
                    <div className="card-title">
                        <p>{}</p>
                    </div>
                    </div>     
                    <div className="btn">
                        <button className="btn-style"  onClick={ subtractProduct }>-</button>
                        <div> {count} </div>
                        <button className="btn-style" onClick={ addProduct }>+</button>
                    </div>
                </div>
            </CardContainer>
        </>
    )
}

export default ItemCount;

const CardContainer = styled.div`
    .container{
        width: 300px;
        overflow: hidden;
        box-shadow: 0px 0px 15px -5px;
        transition: 0.3s;
        animation: ease-in-out;
    }
    
    .container:hover{
        transform: scale(1.1);
        box-shadow: 0px 0px 15px 0px;
    }

    .image-container img{
        overflow: hidden;
        height: 200px;
    }

    .card-content{
        margin: 1rem;
        margin-top: 0.5rem;

    }

    h2{
        margin: 0;
        padding: 0;
    }

    .card-title{
        margin-bottom: 0.5rem;
    }

    .btn{
        display: flex;
        justify-content:space-evenly;
    }

    .btn-style{
        background-color: white;
        cursor: pointer;
        font-size: 1rem;
        margin-bottom: 20px;
    }
    
`