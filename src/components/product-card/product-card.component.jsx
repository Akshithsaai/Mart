import "./product-card.styles.scss"
import Button,{BUTTON_TYPE_CLASSES} from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

// import { useState,useEffect } from "react";


const ProductCard = ({product}) => {

    const {name,price,imageUrl} = product;
    // const [convertedPrice,setConvertedPrice] = useState(null);

    // useEffect(()=>{
    //     var myHeaders = new Headers();
    //     myHeaders.append("apikey", "AsR8QqFSAaP4u57NIOXgFP6s5UYxj67e");

    //     var requestOptions = {
    //     method: 'GET',
    //     redirect: 'follow',
    //     headers: myHeaders
    //     };

    //     fetch("https://api.apilayer.com/exchangerates_data/convert?to="
    //     +"INR" 
    //     +"&from="
    //     +"USD"
    //     +`&amount=${price}`,requestOptions) 
    //     .then(response => response.json()) 
    //     .then(data => {
    //         if (data.success) {
    //         setConvertedPrice(data.result);
    //         console.log(setConvertedPrice); 
    //         } else {
    //         console.log('Currency conversion failed.'); 
    //         }
    //     })
    //     .catch(error => console.log('error', error));

    // },[price]);
    
    const {addItemToCart} = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);

   return (
    <div className="product-card-container">
    <img src={imageUrl} alt={`${name}`} />
    <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price} USD</span>
        
    </div>
    <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>ADD to cart</Button>
</div>
   );

}   
export default ProductCard;