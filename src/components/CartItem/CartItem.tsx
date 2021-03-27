import React from 'react';
import './CartItem.scss';
import {ProductType} from "../../types";

type Props = {
    item: ProductType
}

const CartItem: React.FC<Props> = ({item}) => {
    const {title, price, image} = item;
    return (
        <div className='cart-item'>
            <div className="cart-item__main cart-item-main">
                <h3 className="cart-item-main__title">{title}</h3>
                <div className="cart-item-main__price">
                    <div className="cart-item-main__price--one">Price: {price}</div>
                    <div className="cart-item-main__price--total">Total: {price}</div>
                </div>
                <div className="cart-item-main__btns">
                    <div className="cart-item-main__btns--delete"><span>-</span></div>
                    <div className="cart-item-main__btns--total"><span>1</span></div>
                    <div className="cart-item-main__btns--add"><span>+</span></div>
                </div>

            </div>
            <div className="cart-item__image">
                <img src={image} alt={title} />
            </div>
        </div>
    )
}

export default CartItem;