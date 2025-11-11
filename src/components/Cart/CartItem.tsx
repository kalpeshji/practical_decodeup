import React from "react";
import { Trash2, Minus, Plus } from "lucide-react";
import type { CartItemProps } from "../../utils/types";

const CartItem: React.FC<CartItemProps> = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow border-2 border-gray-100">
      <div className="flex gap-4">
        <img
          src={item.product.image}
          alt={item.product.name}
          className="w-24 h-24 object-cover rounded-lg"
        />

        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-gray-900 line-clamp-2">
              {item.product.name}
            </h3>
            <button
              onClick={() => onRemove(item.id)}
              className="text-red-500 hover:text-red-600 hover:bg-red-50 p-1.5 rounded-lg transition-colors ml-2"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>

          <p className="text-xl font-bold bg-blue-400 bg-clip-text text-transparent mb-3">
            ₹{item.product.price.toLocaleString()}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => onUpdateQuantity(item.id, -1)}
                className="p-2 hover:bg-white rounded-md transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-3 font-bold text-lg">{item.quantity}</span>
              <button
                onClick={() => onUpdateQuantity(item.id, 1)}
                className="p-2 hover:bg-white rounded-md transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <div className="text-right">
              <p className="text-sm text-gray-500">Subtotal</p>
              <p className="font-bold text-gray-900">
                ₹{(item.product.price * item.quantity).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
