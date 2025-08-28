import { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState(() => {
//     // Load cart from localStorage on init
//     const stored = localStorage.getItem("cart");
//     return stored ? JSON.parse(stored) : [];
//   });
const [cart, setCart] = useState([
      {
    id: 13,
    name: "Laptop Lenovo ThinkPad",
    price: 999.99,
    quantity: 1,
    image: "https://placehold.co/80",
    currency:"SYP"

  },  {
    id: 144,
    name: "Laptop Lenovo ThinkPad",
    price: 999.99,
    quantity: 1,
    image: "https://placehold.co/80",
    currency:"SYP"

  },
    {
    id: 168,
    name: "Laptop Lenovo ThinkPad",
    price: 999.99,
    quantity: 1,
    image: "https://placehold.co/80",
    currency:"USD"
  },  {
    id: 166,
    name: "Laptop Lenovo ThinkPad",
    price: 999.99,
    quantity: 1,
    image: "https://placehold.co/80",
    currency:"SYP"
  },  {
    id: 161,
    name: "Laptop Lenovo ThinkPad",
    price: 999.99,
    quantity: 1,
    image: "https://placehold.co/80",
    currency:"SYP"
  },  {
    id: 1643,
    name: "Laptop Lenovo ThinkPad",
    price: 999.99,
    quantity: 1,
    image: "https://placehold.co/80",
    currency:"SYP"
  },  {
    id: 164,
    name: "Laptop Lenovo ThinkPad",
    price: 999.99,
    quantity: 1,
    image: "https://placehold.co/80",
    currency:"SYP"
  },
  {
    id: 16,
    name: "Laptop Lenovo ThinkPad",
    price: 999.99,
    quantity: 1,
    image: "https://placehold.co/80",
    currency:"SYP"
  },
  {
    id: 2,
    name: "Wireless Mouse",
    price: 49.99,
    quantity: 2,
    image: "https://placehold.co/80",
    currency:"USD"
  },
  {
    id: 3,
    name: "Mechanical Keyboard",
    price: 89.99,
    quantity: 1,
    image: "https://placehold.co/80",
    currency:"TK"
  },
]);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext