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

    useEffect(() => {
        api.get().then(data => {
            setData(data);
            setLoading(false);
        })
    }, [])

    const renderItems = (items: ProductType[]) => {
        return items?.map(item => <Item key={item.title} item={item} handleAddToCart={handleAddToCart}/>);
    }

    const openCartHandler = () => setOpenCart(true);
    const closeCartHandler = () => setOpenCart(false);

    const handleAddToCart = (item: ProductType) => {};

    return (
        <div className='app'>
            <CartButton count={5} openHandler={openCartHandler} />
            <Backdrop open={openCart} closeHandler={closeCartHandler} />
            <Cart open={openCart} closeHandler={closeCartHandler}/>
            {
                loading
                    ? <Loader />
                    : renderItems(data)
            }
        </div>
    )
}

export default App;