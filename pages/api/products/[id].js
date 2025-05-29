// pages/api/products/[id].js
import { products } from "../../../lib/data";

export default function handler(req, res) {
  const { id } = req.query;

  // Simulate API delay
  setTimeout(() => {
    const product = products[id];
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  }, 100);
}
