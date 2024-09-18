import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ShoppingCart as CartIcon } from "lucide-react";

const ShoppingCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([]);

  const toggleCart = () => setIsOpen(!isOpen);

  const addToCart = (item) => {
    setItems([...items, item]);
  };

  const removeFromCart = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div className="relative">
      <Button onClick={toggleCart} className="fixed top-4 right-4 z-50">
        <CartIcon className="mr-2 h-4 w-4" /> Cart ({items.length})
      </Button>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
          <div className="absolute right-0 top-0 h-full w-64 bg-white p-4 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {items.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <ul>
                {items.map((item, index) => (
                  <li key={index} className="flex justify-between items-center mb-2">
                    <span>{item.name}</span>
                    <Button onClick={() => removeFromCart(index)} size="sm" variant="destructive">
                      Remove
                    </Button>
                  </li>
                ))}
              </ul>
            )}
            <Button onClick={toggleCart} className="mt-4 w-full">
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;