import React from "react";
import { ShoppingCart, X } from "lucide-react";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import type { CartSidebarProps } from "../../utils/types";

const CartSidebar: React.FC<CartSidebarProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemove,
}) => {
  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white shadow-2xl transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="bg-blue-400 text-white p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <ShoppingCart className="w-7 h-7" />
                <h2 className="text-2xl font-bold">Shopping Cart</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            {cart.totalCount > 0 && (
              <p className="text-indigo-100">
                {cart.totalCount} items in your cart
              </p>
            )}
          </div>

          <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
            {cart.items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-400">
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-full mb-4">
                  <ShoppingCart className="w-20 h-20 text-indigo-300" />
                </div>
                <p className="text-xl font-semibold text-gray-600">
                  Your cart is empty
                </p>
                <p className="text-gray-500 mt-2">
                  Add some products to get started!
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.items.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQuantity={onUpdateQuantity}
                    onRemove={onRemove}
                  />
                ))}
              </div>
            )}
          </div>

          {cart.items.length > 0 && (
            <CartSummary
              totalCount={cart.totalCount}
              totalPrice={cart.totalPrice}
              onCheckout={() => alert("Checkout functionality coming soon!")}
              onContinueShopping={onClose}
            />
          )}
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity"
          onClick={onClose}
        ></div>
      )}
    </>
  );
};

export default CartSidebar;
