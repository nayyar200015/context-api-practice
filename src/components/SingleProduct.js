import React, { useContext } from 'react'
import "./styles.css"
import { Cart } from '../Context';

const SingleProduct = ({ product }) => {
    const { name, price, image } = product;
    const { cart, setCart } = useContext(Cart);
    return (
        <div className='products'>
            <img src={image} alt={name} />
            <div className="productDescription">
                <span style={{ fontWeight: 700 }}>{name}</span><br />
                <span>Rs {price.substring(0, 3)}</span>
            </div>
            {
                (!cart.includes(product) &&
                    <button className='add' onClick={() => setCart([...cart, product])}>Add to Cart</button>) ||
                (<button className='add' onClick={() => setCart(cart.filter(cartProd => cartProd.id !== product.id))}>Remove from Cart</button>)
            }
        </div>
    )
}

export default SingleProduct