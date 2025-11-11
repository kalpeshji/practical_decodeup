import React from "react";
import { Package, ShoppingCart } from "lucide-react";
import type { HeaderProps } from "../../utils/types";

const Header: React.FC<HeaderProps> = ({ cartCount, onCartClick }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-40 border-b border-indigo-100">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="bg-blue-400 rounded-xl">
              <Package className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-blue-400 bg-clip-text text-transparent">
                DecodeUp
              </h1>
              <p className="text-xs text-gray-500">Ecommerce Application</p>
            </div>
          </div>

          <button
            onClick={onCartClick}
            className="relative bg-blue-400 text-white px-5 py-2.5 rounded-xl flex items-center gap-2 hover:shadow-lg hover:scale-105 transition-all duration-200 group"
          >
            <ShoppingCart className="w-5 h-5 group-hover:animate-bounce" />
            <span className="font-semibold hidden sm:inline">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-lg animate-pulse">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
