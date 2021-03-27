import React, {useState, useEffect} from 'react';
import './App.scss';
import FetchApi from "./api/Api";
import {ProductType} from "./types";
import Loader from "./components/Loader/Loader";
import Item from "./components/Item/Item";
import Cart from "./components/Cart/Cart";
import Backdrop from "./components/Backdrop/Backdrop";
import CartButton from "./components/CartButton/CartButton";

const URL: string = 'https://fakestoreapi.com/products';

const api: FetchApi<ProductType>= new FetchApi<ProductType>(URL);


const App = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<ProductType[]>([]);
    const [openCart, setOpenCart] = useState<boolean>(false);
    const [cartItems, setCartItems] = useState<ProductType[]>([])

    useEffect(() => {
        api.get().then(data => {
            data.forEach(item => item.amount = 1);
            setData(data);
            setLoading(false);
        })
    }, [])

    const addToCartHandler = (item: ProductType) => {
        setCartItems(cartItems => {

            const newCartItems = [...cartItems]
            let isRepeat = false;

            newCartItems.forEach(cartItem => {
                if (cartItem.id === item.id) {
                    cartItem.amount++;
                    isRepeat = true;
                }
            })

            if (isRepeat) {
                return newCartItems;
            }
            newCartItems.push(item);
            return newCartItems;
        })
    }

    const removeFromCartHandler = (item: ProductType) => {
        setCartItems(cartItems => {
            cartItems.forEach(cartItem => {
                if (cartItem.id === item.id) {
                    cartItem.amount--;
                }
            })
            cartItems = cartItems.filter(cartItem => cartItem.amount);
            return cartItems;
        })
    }

    const renderItems = (items: ProductType[]) => {
        return items?.map((item, index) => (
            <Item
                key={item.title + index}
                item={item}
                handleAddToCart={addToCartHandler}
            />
            ));
    }

    const getCountOfItems = (items: ProductType[]):number => {
        return items.reduce((acc, item) => {
            acc += item.amount;
            return acc;
        }, 0)
    }

    const openCartHandler = () => setOpenCart(true);
    const closeCartHandler = () => setOpenCart(false);

    return (
        <div className='app'>
            <CartButton count={getCountOfItems(cartItems)} openHandler={openCartHandler} />
            <Backdrop open={openCart} closeHandler={closeCartHandler} />
            <Cart
                open={openCart}
                closeHandler={closeCartHandler}
                cartItems={cartItems}
                handleAddToCart={addToCartHandler}
                removeFromCartHandler={removeFromCartHandler}
            />
            {
                loading
                    ? <Loader />
                    : renderItems(data)
            }
        </div>
    )
}

export default App;