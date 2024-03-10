import React, { useState } from 'react';
import productsData from '../data/productsData';

const Products = () => {
  const [products, setProducts] = useState(productsData);
  const [newProduct, setNewProduct] = useState({ name: '', category: '', price: 0, stock: 0 });
  const [editProductId, setEditProductId] = useState(null);

  const handleAddProduct = () => {
    setProducts([...products, newProduct]);
    setNewProduct({ name: '', category: '', price: 0, stock: 0 });
  };

  const handleEditProduct = (productId) => {
    const editedProducts = products.map((product) =>
      product.id === productId ? { ...product, ...newProduct } : product
    );
    setProducts(editedProducts);
    setEditProductId(null);
    setNewProduct({ name: '', category: '', price: 0, stock: 0 });
  };

  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  return (
    <div>
      <h2>Products Management</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>
                <button onClick={() => setEditProductId(product.id)}>Edit</button>
                <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <h3>Add/Edit Product</h3>
        <label>Name:</label>
        <input
          type="text"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <label>Category:</label>
        <input
          type="text"
          value={newProduct.category}
          onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
        />
        <label>Price:</label>
        <input
          type="number"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
        />
        <label>Stock:</label>
        <input
          type="number"
          value={newProduct.stock}
          onChange={(e) => setNewProduct({ ...newProduct, stock: parseInt(e.target.value) })}
        />
        {editProductId ? (
          <button onClick={() => handleEditProduct(editProductId)}>Update Product</button>
        ) : (
          <button onClick={handleAddProduct}>Add Product</button>
        )}
      </div>
    </div>
  );
};

export default Products;
