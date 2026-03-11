import CartItem from "@/components/CartItem";
import OrderSummary from "@/components/OrderSummary";
import Link from "next/link";
import CartInitializer from "@/components/CartInitializer";
import { headers } from "next/headers";
import CartHeader from "@/components/CartHeader";

async function getCartData() {
  const headerList = await headers();
  const host = headerList.get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

  const res = await fetch(`${protocol}://${host}/api/cart`, {
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
    <div>
      {/* HEADER */}
      <div className="bg-white sticky top-0 z-20">
        <CartHeader />
      </div>

      <CartInitializer items={data.cartItems} />

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto w-full px-6 py-20 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-2">
          <div className="bg-slate-900 rounded-4xl shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-white">Cart Items</h2>
            </div>

            <div className="space-y-6 flex gap-4">
              {data.cartItems.map((item) => (
                <CartItem key={item.product_id} item={item} />
              ))}
            </div>
          </div>
        </div>

        <div className="sticky top-24 h-full">
          <div className="bg-slate-900 rounded-4xl shadow-lg p-8">
            <h3 className="text-xl font-semibold text-white mb-8">
              Order Summary
            </h3>

            <OrderSummary subtotal={subtotal} shipping={data.shipping_fee} />
          </div>
        </div>
      </div>

      {/* FOOTER ACTION BAR */}
      <div className="sticky bottom-0 bg-white backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row gap-3 sm:gap-0 justify-end items-center">
          {/* <Link href="/" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-5 sm:px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition cursor-pointer text-sm sm:text-base">
              ← Continue Shopping
            </button>
          </Link> */}

          <Link href="/checkout" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-10 sm:px-4 py-3 rounded-xl bg-slate-900 font-semibold text-white hover:bg-emerald-600 transition cursor-pointer text-sm sm:text-base">
              Proceed to Checkout →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
