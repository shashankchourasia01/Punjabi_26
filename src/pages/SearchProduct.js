// components/SearchProducts.js
import React, { useState } from "react";
import axios from "axios";
import { SERVER_URL } from "../services/Helper";

const SearchProducts = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Function to handle search
  const searchProducts = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setError("");

    try {
      const response = await axios.get(
        `${SERVER_URL}products/search?query=${query}`
      );
      setProducts(response.data.data || []);
    } catch (err) {
      setError("Failed to fetch products");
      console.error("Search error:", err);
    } finally {
      setLoading(false);
    }
  };

  // Handle input change
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    searchProducts();
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      <div className="products-list">
        {!loading && !error && products.length === 0 && query.trim() && (
          <p>No products found</p>
        )}

        {products.map((product) => (
          <div key={product._id} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">${product.price}</p>
            <span className="category">{product.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchProducts;
