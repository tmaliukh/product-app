import './App.css';
import React, { useState, useEffect } from 'react';
import ProductList from './Product/ProductList';
import Modal from './Modal';

function App() {
  const url = 'http://localhost:3000/products'

  const [products, setProducts] = useState([])
  const [newProduct, setNewProduct] = useState({})
  const [showModal, setShowModal] = useState(false)

  useEffect(async () => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    const prod = await fetch(url).then((res) => res.json())
    setProducts(prod)
  }

  const addNewProduct = async () => {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProduct)
    })
  }

  const handleCancel = () => {
    setNewProduct({})
    setShowModal(false)
  }

  const handleDeleteProduct = async (id) => {
    await fetch(url + '/' + id, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    fetchProducts()
  }

  return (
    <div className="App">

      <ProductList products={products} deleteProduct={handleDeleteProduct} />

      <button onClick={() => setShowModal(true)} className="btn">
        Add new product
      </button>

      {showModal && <Modal
        newProduct={newProduct}
        setNewProduct={setNewProduct}
        addNewProduct={addNewProduct}
        handleCancel={handleCancel}
      />}

    </div>
  );
}

export default App;
