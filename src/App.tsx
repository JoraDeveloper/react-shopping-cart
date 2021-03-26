import React, {useState, useEffect} from 'react';
import './App.scss';
import FetchApi from "./api/Api";
import {ProductType} from "./types";
import Loader from "./components/Loader/Loader";
import Item from "./components/Item/Item";

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
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<ProductType[]>([]);

    useEffect(() => {
        api.get().then(data => {
            console.log(data[0]);
            setData(data);
            setLoading(false);
        })
    }, [])

    const renderItems = (items: ProductType[]) => {
        return items.map(item => <Item key={item.title} item={item} handleAddToCart={handleAddToCart}/>);
    }

    const handleAddToCart = (item: ProductType) => {};

    return (
        <div className='app'>
            {
                loading
                    ? <Loader />
                    : renderItems(data)
            }
        </div>
    )
}

export default App;