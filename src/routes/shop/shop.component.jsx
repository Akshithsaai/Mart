import { useContext } from "react";
// import SHOP_DATA from "../../shop-data.json";
import "./shop.styles.scss"
import { ProductsContext } from "../../contexts/products.context";

import ProductCard from "../../components/product-card/product-card.component";
const Shop = () => {
    const { products } = useContext(ProductsContext);
    // console.log(product);
    return (
        <div >
            <div className="products-container">
                {products.map((product)=>(
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </div>
    );
}
export default Shop;