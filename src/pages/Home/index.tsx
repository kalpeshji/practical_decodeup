import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store";

import { fetchProducts } from "../../redux/Product/productsSlice";
import {
  fetchCart,
  addToCart,
  removeFromCart,
  updateCartQuantity,
} from "../../redux/Cart/cartSlice";

import type { NotificationState, Product } from "../../utils/types";
import Notification from "../../components/UI/Notification";
import Header from "../../components/Layout/Header";
import SearchFilter from "../../components/UI/SearchFilter";
import ProductGrid from "../../components/Product/ProductGrid";
import { LoadingSpinner } from "../../components/UI/LoadingSpinner";
import CartSidebar from "../../components/Cart/CartSidebar";

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { items: products, status: productStatus } = useSelector(
    (state: RootState) => state.products
  );
  const cart = useSelector((state: RootState) => state.cart);

  const [showCart, setShowCart] = useState(false);
  const [notification, setNotification] = useState<NotificationState>({
    message: "",
    type: "",
  });
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCart());
  }, [dispatch]);

  const showNotification = (
    message: string,
    type: "success" | "info" | "error" = "success"
  ) => {
    setNotification({ message, type });
    setTimeout(() => setNotification({ message: "", type: "" }), 3000);
  };

  const filteredProducts = products.filter((product: Product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = async (product: Product) => {
    try {
      await dispatch(
        addToCart({ productId: product.id, quantity: 1 })
      ).unwrap();
      showNotification(`${product.name} added to cart!`, "success");
      dispatch(fetchCart());
    } catch {
      showNotification("Failed to add to cart", "error");
    }
  };

  const handleUpdateQuantity = (id: number, delta: number) => {
    dispatch(updateCartQuantity({ id, quantity: delta }));
  };

  const handleRemoveFromCart = async (itemId: number) => {
    try {
      await dispatch(removeFromCart(itemId)).unwrap();
      showNotification("Item removed from cart", "info");
      dispatch(fetchCart());
    } catch {
      showNotification("Failed to remove item", "error");
    }
  };

  if (productStatus === "loading") return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-gray-100">
      <Notification message={notification.message} type={notification.type} />
      <Header
        cartCount={cart.totalCount}
        onCartClick={() => setShowCart(!showCart)}
      />

      <SearchFilter searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <main className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Featured Products
            </h2>
            <p className="text-gray-600 mt-1">
              {filteredProducts.length} products available
            </p>
          </div>
        </div>

        <ProductGrid
          products={filteredProducts}
          onAddToCart={handleAddToCart}
        />
      </main>

      <CartSidebar
        isOpen={showCart}
        onClose={() => setShowCart(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveFromCart}
      />
    </div>
  );
};

export default Home;
