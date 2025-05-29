// components/SimilarProducts.js - SSG
export default function SimilarProducts({ products }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Similar Products
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-32 object-cover rounded mb-3"
            />

            <h3 className="font-medium text-gray-900 mb-2 text-sm">
              {product.name}
            </h3>

            <p className="text-blue-600 font-semibold">${product.price}</p>

            <button className="w-full mt-3 bg-gray-100 text-gray-700 py-2 rounded hover:bg-gray-200 transition-colors text-sm">
              View Details
            </button>
          </div>
        ))}
      </div>

      <p className="text-sm text-gray-500 mt-4">
        ✨ This section was pre-rendered at build time (SSG)
      </p>
    </div>
  );
}
