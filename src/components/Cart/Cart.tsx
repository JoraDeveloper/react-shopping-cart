import React, {useEffect} from 'react';
import './Cart.scss';
import CartItem from "../CartItem/CartItem";
import {ProductType} from "../../types";

type Props = {
    open: boolean,
    closeHandler: () => void
}

const mockObj: ProductType = {
    category: "men clothing",
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    id: 1,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: "109.95",
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
}

const ref = React.createRef<HTMLDivElement>()

const Cart: React.FC<Props> = ({open, closeHandler}) => {

    useEffect(() => {
        if (open) {
            document.body.classList.add('overflow-hidden')
            ref.current.classList.add('open');
        } else {
            ref.current.classList.remove('open');
            document.body.classList.remove('overflow-hidden')
        }
    }, [open])

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
                    <li className='cart-body__item'>
                        <CartItem item={mockObj} />
                    </li>
                    <li className='cart-body__item'>
                        <CartItem item={mockObj} />
                    </li>
                    <li className='cart-body__item'>
                        <CartItem item={mockObj} />
                    </li>
                    <li className='cart-body__item'>
                        <CartItem item={mockObj} />
                    </li>
                    <li className='cart-body__item'>
                        <CartItem item={mockObj} />
                    </li>
                </ul>
            </div>
            <div className="cart__footer cart-footer">
                <p className="cart-footer__total">
                    Total: {900}$
                </p>
            </div>
        </div>
    )
}

export default Cart;