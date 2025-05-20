🌐 Overview
Papyrus is an online e-commerce platform for stationery lovers! Users can register, browse products, add them to cart, and make payments. Admins manage products, users, and orders to ensure a smooth shopping experience.

💻 Technologies Used
🟦 TypeScript

🟢 Node.js

🚀 Express.js

🍃 MongoDB with Mongoose

👤 Roles & Features
🧍 User Features
🔐 Register/Login with email

🛍️ Browse and filter products

🛒 Add to cart and manage items

💳 Pay using ShurjoPay

📦 Track order status

👤 Update profile (name, address)

📜 View past orders

🛠️ Admin Features
➕ Add/Edit/Delete products

📦 Update order status (Pending, Shipped, etc.)

👥 View and manage users

✅ Activate / ❌ Deactivate user accounts

📊 Monitor user orders

🔐 Auth & Access
Authentication: Required for order, cart, and profile operations

Authorization: Separate roles (admin, user) with secured endpoints

📦 Models Overview
👤 User Model
ts
Copy
Edit
{
name: string;
email: string;
password: string;
role: "admin" | "user";
isDeactivate: boolean;
createdAt: Date;
updatedAt: Date;
}
🛒 Product Model
ts
Copy
Edit
{
name: string;
image: string;
brand: string;
price: number;
category: "Writing Instruments" | "Paper Products" | "Art Supplies" | "Educational";
description: string;
quantity: number;
inStock: boolean;
isDeleted: boolean;
}
🔗 API Endpoints (DUMMY)
🔑 Authentication
1️⃣ Register
POST /api/auth/register

json
Copy
Edit
{
"name": "John Doe",
"email": "john@example.com",
"password": "123456"
}
2️⃣ Login
POST /api/auth/login

json
Copy
Edit
{
"email": "john@example.com",
"password": "123456"
}
📦 Product Management
➕ Add Product
POST /api/product
(For Admin)

json
Copy
Edit
{
"name": "Dummy Pen",
"image": "https://dummy.url/image.jpg",
"brand": "DummyBrand",
"price": 10,
"category": "Writing Instruments",
"description": "Smooth dummy pen",
"quantity": 100
}
✏️ Update Product
PATCH /api/product/:id

❌ Delete Product
DELETE /api/product/:id

📖 Get All Products (Public)
GET /api/product

Optional queries: search, sortBy, filter

👑 Admin Actions
🚫 Deactivate User
PATCH /api/admin/user/:userId/deactivate

📦 Update Order Status
PATCH /api/order/:orderId/status

⚠️ Error Format
json
Copy
Edit
{
"success": false,
"message": "Something went wrong",
"statusCode": 400,
"error": { "details": "Validation failed" },
"stack": "optional error trace"
}
⚙️ Setup Guide (DUMMY)
🔧 1. Clone the Repo
bash
Copy
Edit
git clone https://github.com/your-dummy-user/papyrus.git
📦 2. Install Dependencies
bash
Copy
Edit
cd papyrus
npm install
🚀 3. Start the Project
bash
Copy
Edit
npm run start
🔐 Dummy Admin Credential
bash
Copy
Edit
Email: admin@gmail.com
Password: 123456
🔗 Dummy Links
🌐 Live App: https://papyrus-demo.vercel.app/

💻 GitHub Repo: https://github.com/dummy-user/papyrus.git
