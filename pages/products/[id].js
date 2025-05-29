// pages/products/[id].js
import ProductDetails from "@/components/ProductDetails.js";
import Reviews from "@/components/Reviews.js";
import SimilarProducts from "@/components/SimilarProduct.js";
import { products, similarProducts } from "../../lib/data.js";

export default function ProductPage({ product, similarProducts, renderInfo }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Hybrid Rendering Demo
          </h1>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h2 className="font-semibold text-blue-900 mb-2">
              Rendering Strategies Used:
            </h2>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>
                🔄 <strong>ProductDetails</strong> - Server-Side Rendering (SSR)
                - Fresh data on every request
              </li>
              <li>
                ⚡ <strong>SimilarProducts</strong> - Static Site Generation
                (SSG) - Pre-built at build time
              </li>
              <li>
                🌐 <strong>Reviews</strong> - Client-Side Rendering (CSR) -
                Dynamic loading in browser
              </li>
            </ul>
          </div>
        </div>

        {/* Product Details - SSR */}
        <ProductDetails product={product} />

        {/* Similar Products - SSG */}
        <SimilarProducts products={similarProducts} />

        {/* Reviews - CSR */}
        <Reviews productId={product.id} />

        {/* Render Info */}
        <div className="mt-8 bg-gray-50 border rounded-lg p-4">
          <h3 className="font-semibold mb-2">Page Render Information:</h3>
          <p className="text-sm text-gray-600">
            This page was rendered at: {renderInfo.timestamp}
          </p>
          <p className="text-sm text-gray-600">
            Product data fetched via: {renderInfo.method}
          </p>
        </div>
      </div>
    </div>
  );
}

// SSR - This runs on every request
export async function getServerSideProps(context) {
  const { id } = context.params;

  // Fetch fresh product data on every request (SSR)
  const product = products[id];

  if (!product) {
    return {
      notFound: true,
    };
  }

  // Update the product with current timestamp to show it's fresh
  product.lastUpdated = new Date().toISOString();

  return {
    props: {
      product,
      similarProducts, // This gets the static data
      renderInfo: {
        timestamp: new Date(product.lastUpdated).toLocaleString("en-GB", {
          hour12: true,
        }),
        method: "Server-Side Rendering (SSR)",
      },
    },
  };
}
