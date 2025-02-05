# Matrimony Platform - MERN Stack
![Screenshot 2025-02-05 121744](https://github.com/user-attachments/assets/97fd1dba-f97d-418a-997e-022d9c8c743a)

Welcome to the **Matrimony Platform**, a modern matchmaking web application built using the **MERN stack (MongoDB, Express.js, React, and Node.js)**. This platform connects individuals with potential life partners in a user-friendly and intuitive environment.

## 📌 Table of Contents
- [Live Demo](#-live-demo)
- [Admin Credentials](#-admin-credentials)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Usage](#-usage)
- [Folder Structure](#-folder-structure)
- [API Endpoints](#-api-endpoints)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🚀 Live Demo
🔗 **Frontend Live Site**: [Click here](https://warmify-4879b.web.app/)  
🔗 **Backend API**: [Click here](https://pair-up-server.vercel.app/)  

---

## 🔑 Admin Credentials
- **Email**: `alam38@gmail.com`
- **Password**: `123456`

---

## ✨ Features
✅ Fully responsive design (Mobile, Tablet, Desktop)  
✅ User authentication with **Firebase & JWT**  
✅ **Private routes** for biodata details and user dashboard  
✅ Secure **Stripe payment** integration for contact requests  
✅ **CRUD operations** with toast notifications & SweetAlert2  
✅ **Filtering & sorting** biodata (Age, Gender, Location)  
✅ **User Dashboard** (Edit Biodata, Favorites, Contact Requests)  
✅ **Admin Dashboard** (User Management, Approvals, Revenue Tracking)  
✅ **Premium Membership System**  
✅ **Success Stories** section with user reviews  
✅ **Pagination & TanStack Query** for optimized data fetching  

---

## 🛠 Tech Stack
### **Frontend**
- React.js (with Vite)
- React Router Dom
- TailwindCSS
- Axios
- React Hook Form
- React Icons
- React Toast
- Swiper (for banners/sliders)

### **Backend**
- Node.js & Express.js
- MongoDB & Mongoose
- Firebase Authentication
- Stripe Payment Integration
- JWT Authentication
- TanStack Query
- SweetAlert2  

---

## 📦 Installation

1️⃣ Clone this repository  
```sh
git clone https://github.com/your-username/matrimony-platform.git
cd matrimony-platform
```

2️⃣ Install dependencies  
```sh
npm install
```

3️⃣ Set up environment variables in a `.env` file (See below)  

4️⃣ Start the development server  
```sh
npm run dev
```

---

## 🔑 Environment Variables
Create a `.env` file in the root directory and add:

```plaintext
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
VITE_SERVER_URL=your_backend_api_url
```

---

## 🚀 Usage

- **Users** can create, edit, and view their biodata  
- **Users** can request contact details of a biodata via payment  
- **Admins** can approve premium memberships & contact requests  
- **Admins** can manage users and track revenue  

---

## 📂 Folder Structure
```plaintext
📂 client/
 ├── 📂 src/
 │   ├── 📂 components/
 │   ├── 📂 pages/
 │   ├── 📂 hooks/
 │   ├── 📂 utils/
 │   ├── 📜 main.jsx
 │   ├── 📜 App.jsx
 │   └── 📜 index.css
 ├── 📜 .env
 ├── 📜 package.json
 ├── 📜 README.md

📂 server/
 ├── 📂 models/
 ├── 📂 routes/
 ├── 📂 controllers/
 ├── 📂 middleware/
 ├── 📜 server.js
 ├── 📜 .env
 ├── 📜 package.json
 ├── 📜 README.md
```

---

## 🔗 API Endpoints

### **Auth**
- `POST /api/auth/register` - Register user  
- `POST /api/auth/login` - Login user  
- `POST /api/auth/google` - Google OAuth login  

### **Biodata**
- `GET /api/biodata` - Get all biodatas  
- `GET /api/biodata/:id` - Get single biodata  
- `POST /api/biodata` - Create new biodata  
- `PUT /api/biodata/:id` - Update biodata  
- `DELETE /api/biodata/:id` - Delete biodata  

### **Admin**
- `GET /api/admin/users` - Get all users  
- `PUT /api/admin/make-admin/:id` - Promote user to admin  
- `PUT /api/admin/approve-premium/:id` - Approve premium membership  

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository  
2. Create a new branch (`git checkout -b feature-name`)  
3. Commit your changes (`git commit -m 'Add new feature'`)  
4. Push to your branch (`git push origin feature-name`)  
5. Open a pull request  

---

## 📜 License
This project is licensed under the **PairUp**.

---

Made with ❤️ by [Your Name](https://github.com/MUKTADIR-ALAM)
```

This `README.md` includes:
- Project overview
- Features
- Tech stack
- Installation guide
- API endpoints
- Folder structure
- Contribution guidelines
- License  

Let me know if you need any modifications! 🚀
