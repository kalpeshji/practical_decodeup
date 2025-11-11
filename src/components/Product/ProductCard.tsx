import React from "react";
import { Plus } from "lucide-react";
import type { ProductCardProps } from "../../utils/types";

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-indigo-200">
      <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 min-h-[3.5rem]">
          {product.name}
        </h3>

        <p className="text-2xl font-bold bg-blue-400 bg-clip-text text-transparent mb-4">
          ₹{product.price.toLocaleString()}
        </p>

        <button
          onClick={() => onAddToCart(product)}
          className={`w-full py-3 rounded-xl flex items-center justify-center gap-2 font-semibold transition-all bg-blue-400 text-white hover:shadow-lg hover:scale-105`}
        >
          <Plus className="w-5 h-5" />
          "Add to Cart"
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
