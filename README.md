# 🛒 Geer Intern Assignment – Full Stack E-commerce Platform

This is a full-stack e-commerce web app inspired by [Geer.in](https://geer.in), built as part of the Geer Internship assignment. It includes a **frontend** built with **Next.js** and a **backend** built with **Express + TypeScript**.

---

---

## 🚀 Tech Stack

### 🔹 Frontend

- Next.js (React)
- TypeScript
- TailwindCSS (recommended for styling)
- Axios or Fetch API

### 🔹 Backend

- Node.js
- Express.js
- TypeScript
- In-memory file database (`products.json`)
- CORS and Body Parser

---

## 🎯 Features Implemented

### ✅ Backend API (Express + TypeScript)

- `GET /api/products` – List all products
- `POST /api/products` – Add a new product
- `DELETE /api/products/:id` – Delete a product by ID

Data is stored in a local `products.json` file located in `backend/src/data/`.

### ✅ Frontend (Next.js)

- Product listing at `/products`:
  - Product Image
  - Product Name
  - Price & Original Price
  - Category, Rating, Reviews, Stock Status
- Responsive UI (Mobile-friendly)
- Fetches live data from Express API

---

## 🛠 How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/geer-intern-assignment.git
```

### 2.Run backend server

```bash
cd geer-intern-assignment
cd backend
npm install
npm run dev
```

### 3. Run frontend

```bash
cd geer-intern-assignment
cd frontend
npm install
npm run dev
```
