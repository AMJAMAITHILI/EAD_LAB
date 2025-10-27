// ProductApp.jsx
import React, { useState } from "react";

export default function ProductApp() {
  const [id, setId] = useState("");
  const [product, setProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({ id: "", name: "", category: "", price: "" });
  const [msg, setMsg] = useState("");

  // GET product by ID
  const handleGet = async (e) => {
    e.preventDefault();
    if (!id) return setMsg("Enter product ID");
    try {
      const res = await fetch(`http://localhost:4000/products/${id}`);
      const data = await res.json();
      if (res.ok) setProduct(data);
      else setMsg(data.error);
    } catch {
      setMsg("Error connecting to server");
    }
  };

  // POST add new product
  const handleAdd = async (e) => {
    e.preventDefault();
    const { id, name, category, price } = newProduct;
    if (!id || !name) return setMsg("ID and Name required");
    try {
      const res = await fetch("http://localhost:4000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, name, category, price: Number(price) }),
      });
      const data = await res.json();
      if (res.ok) setMsg("Product added successfully");
      else setMsg(data.error);
    } catch {
      setMsg("Error connecting to server");
    }
  };

  return (
    <div>
      <h3>Get Product by ID</h3>
      <form onSubmit={handleGet}>
        <input
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Product ID"
        />
        <button type="submit">Get Product</button>
      </form>
      {product && ( //setproduct updates product in handleGet 
        <div>
          <p>ID: {product.id}</p>
          <p>Name: {product.name}</p>
          <p>Category: {product.category}</p>
          <p>Price: {product.price}</p>
        </div>
      )}

      <h3>Add New Product</h3>
      <form onSubmit={handleAdd}>
        <input
          placeholder="ID"
          value={newProduct.id}
          onChange={(e) => setNewProduct({ ...newProduct, id: e.target.value })}//setNewProduct updates newProduct state andreturns to  handleAdd
          //Copies all key-value pairs from the existing newProduct object using the spread operator (...newProduct) and then overrides the id property with the new value from the input field.
        />
        <input
          placeholder="Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          placeholder="Category"
          value={newProduct.category}
          onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
        />
        <input
          placeholder="Price"
          type="number"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <button type="submit">Add Product</button>
      </form>

      {msg && <p>{msg}</p>}
    </div>
  );
}
