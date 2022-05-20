import { useEffect, useState } from "react";
import ProductList from "./ProductList";

const ProductContainer = () => {
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
          <ProductList products={products} />
        </>
      )
}
export default ProductContainer;