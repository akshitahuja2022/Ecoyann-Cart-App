import { cartData } from "@/data/cartData";

import CartItem from "@/components/CartItem";
import OrderSummary from "@/components/OrderSummary";
import Link from "next/link";

export default function CartPage() {
  const subtotal = cartData.cartItems.reduce(
    (acc, item) => acc + item.product_price * item.quantity,
    0,
  );

  return (
    <div className="p-10">
      <h1 className="text-center text-2xl font-bold mb-10">
        Welcome to Ecommerce-Cart-App
      </h1>

      <div className="flex gap-12 justify-center">
        {cartData.cartItems.map((item) => (
          <CartItem key={item.product_id} item={item} />
        ))}
      </div>

      <div className="w-3/4 m-auto">
        <OrderSummary subtotal={subtotal} shipping={cartData.shipping_fee} />
      </div>

      <div className="flex justify-center">
        <Link href="/checkout">
          <button className="bg-green-600 text-white text-lg font-semibold px-4 py-2 mt-8 rounded-md cursor-pointer">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}
