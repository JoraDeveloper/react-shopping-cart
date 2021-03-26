import React from 'react';
import './CartButton.scss';

type Props = {
    count: number,
    openHandler: () => void
}

const CartButton: React.FC<Props> = ({openHandler, count}) => {
    return (
        <div className="app__cart-icon cart-icon" onClick={openHandler}>
            <img src="./assets/shopping-cart.svg" alt="cart" className='cart-icon__img'/>
            <div className='cart-icon__length-cart'>{count}</div>
        </div>
    )
}

export default CartButton;