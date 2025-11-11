import React from "react";
import { Check } from "lucide-react";
import type { CartSummaryProps } from "../../utils/types";

const CartSummary: React.FC<CartSummaryProps> = ({
  totalCount,
  totalPrice,
  onCheckout,
  onContinueShopping,
}) => {
  return (
    <div className="border-t-2 border-gray-200 p-6 bg-white">
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal ({totalCount} items)</span>
          <span className="font-semibold">₹{totalPrice.toLocaleString()}</span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span className="font-semibold text-green-600">FREE</span>
        </div>

        <div className="border-t-2 border-gray-200 pt-3">
          <div className="flex justify-between text-xl font-bold">
            <span>Total</span>
            <span className="bg-blue-400 bg-clip-text text-transparent">
              ₹{totalPrice.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      <button
        onClick={onCheckout}
        className="w-full bg-blue-400 text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
      >
        <Check className="w-5 h-5" />
        Proceed to Checkout
      </button>

      <button
        onClick={onContinueShopping}
        className="w-full mt-3 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default CartSummary;
