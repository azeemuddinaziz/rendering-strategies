// pages/api/reviews/[productId].js
import { reviews } from "../../../lib/data";

export default function handler(req, res) {
  const { productId } = req.query;

  const productReviews = reviews.filter(
    (review) => review.productId === parseInt(productId)
  );

  setTimeout(() => {
    res.status(200).json(productReviews);
  }, 300);
}
