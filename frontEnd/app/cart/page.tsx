"use client";

import { useCart } from "@/context/CartContext";
import { FiTrash2, FiPlus, FiMinus } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const router = useRouter();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 250;
  const total = subtotal + shipping;

  const handleCODCheckout = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/register");
      return;
    }
    try {
      const res = await fetch("http://localhost:3000/orders/cod", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          items: cart.map((item) => ({
            bookId: item._id,
            price: item.price,
            quantity: item.quantity,
          })),
          shipping: 250,
        }),
      });
      const data = await res.json();
      localStorage.removeItem("cart");
      router.push(`/receipt?orderId=${data._id}&method=cod&status=pending`);
    } catch (err) {
      console.error(err);
      alert("Failed to place order. Please try again.");
    }
  };

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
        <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center text-4xl">
          🛒
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Your cart is empty</h2>
          <p className="text-slate-500 mt-2">Looks like you haven't added anything yet.</p>
        </div>
        <button className="btn-primary" onClick={() => (window.location.href = "/")}>
          Start Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="pb-20">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-12">
        Your <span className="gradient-text">Shopping Bag</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {cart.map((item) => (
            <div
              key={item._id}
              className="premium-card flex flex-col sm:flex-row items-center gap-6 p-6 group"
            >
              <div className="relative w-32 h-40 flex-shrink-0 overflow-hidden rounded-xl bg-slate-50">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 mt-1">{item.author}</p>
                <div className="mt-4 flex items-center justify-center sm:justify-start gap-4">
                  <span className="text-lg font-bold text-slate-900">
                    Rs. {item.price.toLocaleString()}
                  </span>
                  <span className="text-sm text-indigo-600 bg-indigo-50 px-2 py-1 rounded-lg font-medium">
                    In Stock
                  </span>
                </div>

                <div className="mt-6 flex items-center justify-center sm:justify-start gap-4">
                  <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => updateQuantity(item._id, item.quantity - 1)}
                      className="p-2 hover:bg-slate-100 transition-colors border-r border-slate-200"
                      disabled={item.quantity <= 1}
                    >
                      <FiMinus className="text-sm" />
                    </button>
                    <span className="px-4 py-1.5 font-bold text-slate-900 bg-white min-w-[3rem] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item._id, item.quantity + 1)}
                      className="p-2 hover:bg-slate-100 transition-colors border-l border-slate-200"
                    >
                      <FiPlus className="text-sm" />
                    </button>
                  </div>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item._id)}
                className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                title="Remove item"
              >
                <FiTrash2 className="text-xl" />
              </button>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="premium-card p-8 sticky top-28 bg-slate-900 text-white border-none">
            <h2 className="text-2xl font-bold mb-8">Order Summary</h2>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-slate-400 font-medium">
                <span>Subtotal</span>
                <span className="text-white">Rs. {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-400 font-medium">
                <span>Shipping</span>
                <span className="text-white">Rs. {shipping.toLocaleString()}</span>
              </div>
              <div className="pt-4 border-t border-slate-800 flex justify-between">
                <span className="text-lg font-bold">Total</span>
                <span className="text-2xl font-bold text-indigo-400">
                  Rs. {total.toLocaleString()}
                </span>
              </div>
            </div>

            <button
              onClick={handleCODCheckout}
              className="w-full btn-primary !bg-indigo-500 hover:!bg-indigo-400 py-4 shadow-xl shadow-indigo-500/10"
            >
              Place Order (COD)
            </button>

            <p className="text-xs text-center text-slate-500 mt-6">
              Taxes and shipping calculated at checkout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


