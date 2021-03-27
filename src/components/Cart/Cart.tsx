import React, {useEffect} from 'react';
import './Cart.scss';
import CartItem from "../CartItem/CartItem";
import {ProductType} from "../../types";

type Props = {
    open: boolean,
    closeHandler: () => void,
    cartItems: ProductType[],
    removeFromCartHandler: (item: ProductType) => void,
    handleAddToCart: (item: ProductType) => void,
}

const ref = React.createRef<HTMLDivElement>()

const Cart: React.FC<Props> = ({open, closeHandler, cartItems, removeFromCartHandler, handleAddToCart}) => {

    useEffect(() => {
        if (open) {
            document.body.classList.add('overflow-hidden')
            ref.current.classList.add('open');
        } else {
            ref.current.classList.remove('open');
            document.body.classList.remove('overflow-hidden')
        }
    }, [open])
    console.log(cartItems);

    const renderItems = (cartItems: ProductType[]) => {
        return cartItems.map((item, index) => (
            <li className='cart-body__item'>
                <CartItem
                    key={item.title + index}
                    item={item}
                    removeFromCartHandler={removeFromCartHandler}
                    handleAddToCart={handleAddToCart}
                />
            </li>
            ))
    }

    const getTotalPrice = (cartItems: ProductType[]): string => {
        return cartItems.reduce((acc, item) => {
            const {price, amount} = item;
            acc += Number(price) * amount;
            return acc;
        }, 0).toFixed(2);
    }


    return (
        <div className='cart' ref={ref}>
            <div className="cart__header cart-header">
                <h3 className="cart-header__title">
                    Cart
                </h3>
                <div className="cart-header__close" onClick={closeHandler}>
                    <img src="../../assets/close.svg" />
                </div>
            </div>
            <div className="cart__body cart-body">
                <ul className='cart-body__list'>
                    {
                        renderItems(cartItems)
                    }
                </ul>
            </div>
            <div className="cart__footer cart-footer">
                <p className="cart-footer__total">
                    Total: {getTotalPrice(cartItems)}$
                </p>
            </div>
        </div>
    )
}

export default Cart;