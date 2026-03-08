# Ecoyaan Checkout Flow – Frontend Engineering Assignment

This project is a simplified **Checkout Flow** inspired by the Ecoyaan platform.  
It demonstrates **React, Next.js Server-Side Rendering (SSR), state management, and responsive UI development**.

The application guides users from reviewing their **cart**, entering **shipping details**, and completing a **simulated payment**.

---

# Live Demo

Deployed Link: https://ecoyann-cart-app.vercel.app

Repository: https://github.com/yourusername/ecoyaan-checkout

---

# Tech Stack

- **Next.js (App Router)**
- **React**
- **Tailwind CSS**
- **Context API (State Management)**
- **Next.js Server Components / SSR**
- **Next.js API Routes (Mock Backend)**

---

# Features

### 1. Cart / Order Summary
- Displays products with:
  - Product Image
  - Product Name
  - Price
  - Quantity
- Shows:
  - Subtotal
  - Shipping Fee
  - Grand Total
- Button to **Proceed to Checkout**

---

### 2. Shipping Address Form
Collects user information:

- Full Name
- Email Address
- Phone Number
- PIN Code
- City
- State

Includes basic form validation:
- Required field validation
- Email format validation
- 10-digit phone number validation

---

### 3. Payment / Confirmation Screen

Displays:
- Final Order Summary
- Shipping Address details

Includes a **Simulated Payment Button**:
- Clicking **Pay Securely** redirects to a **Success Page**

---

### 4. Success Page

Displays:
- Order Successful!
- Thank you for your purchase.
  
---

# Server-Side Rendering (SSR)

Cart data is fetched using **Next.js Server Components / SSR** to simulate real backend data fetching.

Example mock data used:

```json
{
  "cartItems": [
    {
      "product_id": 101,
      "product_name": "Bamboo Toothbrush (Pack of 4)",
      "product_price": 299,
      "quantity": 2,
      "image": "https://via.placeholder.com/150"
    },
    {
      "product_id": 102,
      "product_name": "Reusable Cotton Produce Bags",
      "product_price": 450,
      "quantity": 1,
      "image": "https://via.placeholder.com/150"
    }
  ],
  "shipping_fee": 50,
  "discount_applied": 0
}
```
---
# Project Structure
```
ecoyaan-checkout
│
├── app
│   ├── page.js                 # Cart / Order Summary
│   ├── checkout/page.js       # Shipping Address Form
│   ├── payment/page.js        # Payment Confirmation
│   └── success/page.js        # Order Success Page
│
├── components
│   ├── CartItem.jsx
│   ├── OrderSummary.jsx
│   └── AddressForm.jsx
│
├── context
│   └── CartContext.jsx        # Global State Management
│
├── app/api/cart/route.js      # Mock API
│
└── README.md
```
---
## Running the Project Locally

Follow these steps to run the project on your local machine.

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/ecoyaan-checkout.git
```
### 2. Navigate to the project directory

 ```bash
cd ecoyaan-checkout
```
### 3. Install dependencies

```bash
npm install
```

### 4. Run the development server

```bash
npm run dev
```
### 5. Open the application in your browser

```bash
http://localhost:3000
```

---

# Author

- Akshit Ahuja
- akshitahuja1322@gmail.com
- https://www.linkedin.com/in/akshit-ahuja-1583b928a/
