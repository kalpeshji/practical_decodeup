import React from "react";
import { Package } from "lucide-react";
import ProductCard from "./ProductCard"; 
import type { ProductGridProps } from "../../utils/types";

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onAddToCart,
}) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <Package className="w-20 h-20 text-gray-300 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-600 mb-2">No products found</h3>
        <p className="text-gray-500">Try adjusting your search or filters</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
