import React, {useEffect} from 'react';
import './Cart.scss';

type Props = {
    open: boolean,
    closeHandler: () => void
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
        </div>
    )
}

export default Cart;