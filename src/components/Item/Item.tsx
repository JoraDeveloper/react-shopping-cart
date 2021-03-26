import React from 'react';
import './Item.scss';
import {ProductType} from "../../types";

type Props = {
    item: ProductType,
    handleAddToCart: (item: ProductType) => void
}

const Item: React.FC<Props> = ({item, handleAddToCart}) => {
    const {title, description, image} = item;
    return (
        <div className='item'>
            <div className="item__image">
                <img src={image} alt={title}/>
            </div>
            <h3 className="item__title">{title}</h3>
            <div className="item__description">{description}</div>
            <div className="item__footer">
                <button onClick={() => handleAddToCart(item)}>Add to cart</button>
            </div>
        </div>
    )
}

export default Item;