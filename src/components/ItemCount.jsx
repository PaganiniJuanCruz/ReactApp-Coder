/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import styled from 'styled-components'
import image1 from "../assets/FotoPerfil.jpg"

const ItemCount =  ({ products, stock }) => {
    const [ count, setCount ] = useState(0);

    const addProduct = () => {
        setCount ( count + 1 )
        if( count => stock ){
            setCount( count + 0)
            alert("THERE ARE NO MORE PRODUCTS AVAILABLE!");
            }
        }

    const subtractProduct = () => {
        setCount ( count - 1 )
        if ( count < 1 ){
            setCount( count + 0 )
        }
    }

    return(
        <>
            <CardContainer>
                <div className="container">
                    <div className="image-container">
                        <img src={ image1 } alt="" className="img"/>
                    </div>
                    <div className="card-content">
                    <div className="card-title">
                        <p>Tatum</p>
                    </div>
                    </div>     
                    <div className="btn">
                        <button className=""  onClick={ subtractProduct }>-</button>
                        <div className="counter"> {count} </div>
                        <button className="button button5" onClick={ addProduct }>+</button>
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
        justify-content: center;
    }

    .btn button{
        padding: 0.5rem;
        background-color: #855b5b;
        border: none;
        transition: 0.2s;
    }

    .btn button:hover{
        background-color: beige;
    }
`