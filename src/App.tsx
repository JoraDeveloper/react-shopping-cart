import React, {useState} from 'react';
import './App.scss';
import FetchApi from "./api/Api";
import {ProductType} from "./types";
import Loader from "./components/Loader/Loader";

const URL: string = 'https://fakestoreapi.com/products';

const api: FetchApi<ProductType>= new FetchApi<ProductType>(URL);

const App = () => {
    const [loading, setLoading] = useState(true);

    api.get().then(data => {
        setLoading(false);
    })

    return (
        <div className='app'>
            {
                loading
                    ? <Loader />
                    : <p>Data fetched</p>
            }
        </div>
    )
}

export default App;