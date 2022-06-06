import styled from "styled-components"

const ItemDetail = () =>{
    return (
        <>
            <ButtonDetail>
                <div className="btn">
                    <button>Detail Product</button>
                </div>
            </ButtonDetail>
        </>
    )


}

export default ItemDetail;

const ButtonDetail = styled.div`
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