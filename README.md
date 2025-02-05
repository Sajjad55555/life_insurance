This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

<<<<<<< HEAD
=======



>>>>>>> 0931dc1899eea82f252769953a7823c02ce08b3d
**Bilkul bhai! Main aapke liye step-by-step documentation tayyar karta hoon. Yeh documentation frontend (Next.js) aur backend (FastAPI) ko alag-alag sections mein cover karegi. Chaliye shuru karte hain! 🚀**

---

## **Project Documentation**  
**Project Name:** E-commerce Platform with Order Tracking  
**Frontend:** Next.js (TypeScript)  
**Backend:** FastAPI (Python)  
**Database:** PostgreSQL (Recommended)  

---

### **Backend Documentation (FastAPI)**  
#### **1. Database Schema Design**  
**Tables:**  
1. **Users Table** (Optional, agar user accounts hain)  
   ```sql
   CREATE TABLE users (
       id SERIAL PRIMARY KEY,
       email VARCHAR(255) UNIQUE NOT NULL,
       password_hash VARCHAR(255) NOT NULL
   );
   ```

2. **Orders Table**  
   ```sql
   CREATE TABLE orders (
       order_id UUID PRIMARY KEY DEFAULT gen_random_uuid(), -- Unique Order ID
       user_id INT REFERENCES users(id), -- Optional (if logged in)
       first_name VARCHAR(50) NOT NULL,
       last_name VARCHAR(50) NOT NULL,
       country VARCHAR(50) NOT NULL,
       street_address TEXT NOT NULL,
       apartment TEXT,
       city VARCHAR(50) NOT NULL,
       state VARCHAR(50) NOT NULL,
       phone VARCHAR(20) NOT NULL,
       email VARCHAR(100) NOT NULL,
       order_notes TEXT,
       payment_status VARCHAR(20) DEFAULT 'pending', -- e.g., 'pending', 'completed', 'failed'
       order_status VARCHAR(20) DEFAULT 'processing', -- e.g., 'shipped', 'delivered', 'canceled'
       tracking_id VARCHAR(100) UNIQUE, -- Generated after shipping
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

3. **Payments Table**  
   ```sql
   CREATE TABLE payments (
       payment_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
       order_id UUID REFERENCES orders(order_id),
       payment_method VARCHAR(20) NOT NULL, -- 'stripe' or 'paypal'
       transaction_id VARCHAR(100) NOT NULL, -- Payment gateway's transaction ID
       amount DECIMAL(10, 2) NOT NULL,
       status VARCHAR(20) NOT NULL, -- 'success', 'failed'
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

---

#### **2. API Endpoints (FastAPI)**  
**Base URL:** `https://api.yourdomain.com/v1`  

| **Endpoint** | **Method** | **Description** |  
|--------------|------------|-----------------|  
| `/orders/create` | POST | Create a new order with shipping info |  
| `/payments/stripe` | POST | Process Stripe payment |  
| `/payments/paypal` | POST | Process PayPal payment |  
| `/orders/{order_id}/track` | GET | Get order tracking details |  
| `/orders/{order_id}/status` | PATCH | Update order status (admin-only) |  

---

##### **Example: Create Order (POST `/orders/create`)**  
**Request Body:**  
```json
{
    "first_name": "John",
    "last_name": "Doe",
    "country": "Pakistan",
    "street_address": "123 Main Street",
    "apartment": "Apt 4B",
    "city": "Karachi",
    "state": "Sindh",
    "phone": "+923001234567",
    "email": "john@example.com",
    "order_notes": "Handle with care"
}
```

**Response:**  
```json
{
    "order_id": "a1b2c3d4-5678-90ef-ghij-klmnopqrstuv",
    "tracking_id": "TRACK-12345",
    "payment_url": "https://api.yourdomain.com/payments/stripe?order_id=..." 
}
```

---

##### **Example: Stripe Payment (POST `/payments/stripe`)**  
**Flow:**  
1. Frontend Stripe SDK se `payment_intent` generate karega.  
2. Backend Stripe ke webhook ko verify karega aur payment status update karega.  

**Code Snippet (FastAPI):**  
```python
from fastapi import APIRouter, Request
from stripe.error import SignatureVerificationError

router = APIRouter()

@router.post("/stripe-webhook")
async def stripe_webhook(request: Request):
    payload = await request.body()
    sig_header = request.headers.get("stripe-signature")
    try:
        event = stripe.Webhook.construct_event(
            payload, sig_header, "STRIPE_WEBHOOK_SECRET"
        )
        # Handle payment success/failure logic here
        return {"status": "success"}
    except SignatureVerificationError:
        return {"error": "Invalid signature"}
```

---

### **Frontend Documentation (Next.js)**  
#### **1. Pages & Components**  
- **Product Page:** Product selection and "Add to Cart" functionality.  
- **Checkout Page:**  
  - Form for shipping information (all fields you mentioned).  
  - Integration with Stripe/PayPal buttons.  
- **Order Tracking Page:**  
  - Input field for `tracking_id`.  
  - Display order status and location updates.  

---

#### **2. Checkout Form (React Component)**  
```tsx
// components/CheckoutForm.tsx
import { useState } from "react";

export default function CheckoutForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        country: "",
        streetAddress: "",
        apartment: "",
        city: "",
        state: "",
        phone: "",
        email: "",
        orderNotes: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Call FastAPI backend to create order
        const response = await fetch("/api/orders/create", {
            method: "POST",
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        // Redirect to payment URL (Stripe/PayPal)
        window.location.href = data.payment_url;
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Add all input fields here */}
        </form>
    );
}
```

---

#### **3. Stripe Integration (Next.js)**  
```tsx
// pages/payment/stripe.tsx
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("STRIPE_PUBLIC_KEY");

export default function StripePayment() {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    );
}
```

---

### **Order Tracking Flow**  
1. Payment successful hone ke baad, backend `order_status` ko "processing" karega.  
2. Admin dashboard se `tracking_id` (e.g., "DHL-123") aur shipping details update karega.  
3. User `tracking_id` enter karke apna order track kar sakta hai.  

**Tracking Status Example:**  
```json
{
    "order_id": "a1b2c3d4-...",
    "tracking_id": "DHL-123",
    "status": "shipped",
    "current_location": "Karachi Warehouse",
    "estimated_delivery": "2024-03-25"
}
```

---

### **Developer Notes**  
1. **Security:**  
   - HTTPS enforce karein.  
   - Stripe/PayPal ke API keys ko `.env` file mein store karein.  
2. **Error Handling:**  
   - Frontend: Try-catch blocks aur error toasts.  
   - Backend: FastAPI ka built-in error handling (HTTP 400, 500, etc.).  
3. **Testing:**  
   - Backend: `pytest` ke sath API endpoints test karein.  
   - Frontend: `jest` aur `React Testing Library` use karein.  

---

### **Deployment Instructions**  
1. **Backend (FastAPI):**  
   ```bash
   # Dockerfile Example
   FROM tiangolo/uvicorn-gunicorn-fastapi:python3.9
   COPY ./app /app
   RUN pip install -r requirements.txt
   ```
   Deploy to Heroku/DigitalOcean.

2. **Frontend (Next.js):**  
   ```bash
   npm run build
   npm start
   ```
   Deploy to Vercel.

---

**Bhai, yeh documentation aapke developers ke liye kaafi detailed hai. Agar kuch aur add karna ho ya clarify karna ho, to pooch sakte hain! 😊**  

<<<<<<< HEAD
**Frontend Developer** ko [Frontend Docs](#frontend-documentation-nextjs) aur **Backend Developer** ko [Backend Docs](#backend-documentation-fastapi) alag-alag share kar den. 🚀
=======
**Frontend Developer** ko [Frontend Docs](#frontend-documentation-nextjs) aur **Backend Developer** ko [Backend Docs](#backend-documentation-fastapi) alag-alag share kar den. 🚀
>>>>>>> 0931dc1899eea82f252769953a7823c02ce08b3d
