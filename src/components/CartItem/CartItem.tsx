import React from 'react';
import './CartItem.scss';
import {ProductType} from "../../types";

type Props = {
    item: ProductType,
    handleAddToCart:(item: ProductType) => void,
    removeFromCartHandler: (item: ProductType) => void,
}

const CartItem: React.FC<Props> = ({item, handleAddToCart, removeFromCartHandler}) => {
    const {title, price, image, amount} = item;

    return (
        <div className='cart-item'>
            <div className="cart-item__main cart-item-main">
                <h3 className="cart-item-main__title">{title}</h3>
                <div className="cart-item-main__price">
                    <div className="cart-item-main__price--one">Price: {price}$</div>
                    <div className="cart-item-main__price--total">Total: {(Number(price) * amount).toFixed(2)}$</div>
                </div>
                <div className="cart-item-main__btns">
                    <div className="cart-item-main__btns--delete" onClick={() => removeFromCartHandler(item)}>
                        <span>-</span>
                    </div>
                    <div className="cart-item-main__btns--total">
                        <span>{amount}</span>
                    </div>
                    <div className="cart-item-main__btns--add" onClick={() => handleAddToCart(item)}>
                        <span>+</span>
                    </div>
                </div>

            </div>
            <div className="cart-item__image">
                <img src={image} alt={title} />
            </div>
        </div>
    )
}

export default CartItem;