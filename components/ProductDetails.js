// components/ProductDetails.js - SSR
import { useState } from "react";

export default function ProductDetails({ product }) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    alert(`Added ${quantity} x ${product.name} to cart!`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {product.name}
          </h1>

          <p className="text-2xl font-semibold text-blue-600 mb-4">
            ${product.price}
          </p>

          <p className="text-gray-600 mb-4">{product.description}</p>

          <div className="mb-4">
            <span
              className={`px-3 py-1 rounded-full text-sm ${
                product.stock > 10
                  ? "bg-green-100 text-green-800"
                  : "bg-yellow-100 text-yellow-800"
              }`}
            >
              {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
            </span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <label htmlFor="quantity" className="font-medium">
              Quantity:
            </label>
            <select
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="border rounded px-3 py-2"
            >
              {[...Array(Math.min(product.stock, 10))].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Add to Cart
          </button>

          <p className="text-sm text-gray-500 mt-4">
            Last updated:{" "}
            {new Date(product.lastUpdated).toLocaleString("en-GB", {
              hour12: true,
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
