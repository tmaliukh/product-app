import React from 'react'

export default function ProductItem({ product, deleteProduct }) {
    return (
        <div className='product-item'>
            <img src={product.imageUrl} className='product-image' />

            <div className='product-content'>
                <span style={{ textAlign: 'center' }}><h3>{product.name}</h3></span>
                <p>Count: {product.count}</p>
                <p>Size: {product.size?.width || ''} /{product.size?.height || ''}</p>
            </div>
            <div className="deleteIcon">
                <img
                onClick={() => deleteProduct(product.id)}
                style={{ width: '20px', height: '20px', cursor: 'pointer'}} src='https://toppng.com/uploads/preview/delete-comments-delete-icon-black-11563177686kfv8sa8gps.png' />
            </div>
        </div>
    )
}
