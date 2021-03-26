import React, {useState, useEffect} from 'react';
import './App.scss';
import FetchApi from "./api/Api";
import {ProductType} from "./types";
import Loader from "./components/Loader/Loader";
import Item from "./components/Item/Item";
import Cart from "./components/Cart/Cart";
import Backdrop from "./components/Backdrop/Backdrop";
import CartButton from "./components/CartButton/CartButton";

const mockObj: ProductType = {
    category: "men clothing",
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    id: 1,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: "109.95",
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
}

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