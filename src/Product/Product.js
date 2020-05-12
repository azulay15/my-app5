import React from 'react';
import './Product.css';

export function Product(props) {
    return (
        <div className="product">
            <h1 className="title">{props.title}</h1>
            <p className="description">{props.children}</p>
            <p className="price">${props.price}</p>
        </div>
    )
}
