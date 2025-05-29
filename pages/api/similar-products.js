// pages/api/similar-products.js
import { similarProducts } from "../../lib/data";

export default function handler(req, res) {
  // Simulate slower API for similar products
  setTimeout(() => {
    res.status(200).json(similarProducts);
  }, 200);
}
