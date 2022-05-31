import { useEffect, useState } from "react";
import ItemList from "../components/ItemList";

const ItemContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            const promise = new Promise((acc, rej) => {
                const response = fetch('/products.json');
                setTimeout(() => {
                    acc(response);
                }, 2000)
            })
            try {
                const answer = await promise;
                const data = await answer.json();
                setProducts(data.products);
                
            } catch (error) {
                console.log(error);
            }
        })()
    }, [])

    return (
        <>
          <ItemList items={products} />
        </>
      )
}
export default ItemContainer;