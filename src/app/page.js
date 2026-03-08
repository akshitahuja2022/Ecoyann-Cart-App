import CartItem from "@/components/CartItem";
import OrderSummary from "@/components/OrderSummary";
import Link from "next/link";
import CartInitializer from "@/components/CartInitializer";

async function getCartData() {
  const res = await fetch(`/api/cart`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch cart data");
  }

  return res.json();
}

export default async function CartPage() {
  const data = await getCartData();
  const subtotal = data.cartItems.reduce(
    (acc, item) => acc + item.product_price * item.quantity,
    0,
  );

  return (
    <div className="p-10">
      <h1 className="text-center text-2xl font-bold mb-10">
        Welcome to Ecommerce-Cart-App
      </h1>

      <CartInitializer items={data.cartItems} />

      <div className="flex gap-12 justify-center">
        {data.cartItems.map((item) => (
          <CartItem key={item.product_id} item={item} />
        ))}
      </div>

      <div className="w-3/4 m-auto">
        <OrderSummary subtotal={subtotal} shipping={data.shipping_fee} />
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
