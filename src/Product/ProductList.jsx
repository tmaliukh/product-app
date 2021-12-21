import React from 'react';
import ProductItem from './ProductItem';

export default function ProductList({ products, deleteProduct}) {
    return (
        <div className='product-list'>
            {products.map((product) => {
                return (
                     <ProductItem product={product} key={product.id} deleteProduct={deleteProduct}/>
                )
            })}
        </div>
    )
}
