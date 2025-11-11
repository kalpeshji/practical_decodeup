export interface Product {
  id: string | number;
  name: string;
  image: string;
  price: number;
}

export interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

export interface CartItem {
  id: number;
  product: Product;
  quantity: number;
}

export interface CartItemProps {
  item: CartItem;
  onUpdateQuantity: (id: number, change: number) => void;
  onRemove: (id: number) => void;
}

export interface Cart {
  items: CartItem[];
  totalCount: number;
  totalPrice: number;
}

export interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cart: Cart;
  onUpdateQuantity: (id: number, change: number) => void;
  onRemove: (id: number) => void;
}

export interface CartSummaryProps {
  totalCount: number;
  totalPrice: number;
  onCheckout: () => void;
  onContinueShopping: () => void;
}

export interface NotificationState {
  message: string;
  type: "success" | "info" | "error" | "";
}
