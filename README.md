# 🛒 E-Commerce API

A RESTful E-Commerce Backend API built using Node.js, Express.js, MongoDB, and JWT Authentication. This project provides secure user authentication and product management functionalities for building scalable e-commerce applications.

---

## 🚀 Features

### 🔐 Authentication
- User Registration
- User Login
- JWT Token Generation
- Protected Routes
- Password Hashing using bcrypt

### 📦 Product Management
- Create Product
- Get All Products
- Get Product By ID
- Update Product
- Delete Product
- Product Metadata Support

### 🗄️ Database
- MongoDB Integration
- Mongoose ODM
- Schema Validation

### 🖼️ Media Uploads
- Product Image Uploads using Multer
- Cloud Image Storage using ImageKit

### 🛡️ Security
- JWT Authentication Middleware
- Password Encryption
- Environment Variables Management

---

# 🏗️ Project Structure

```bash
e-commerce-api/
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── product.controller.js
│   │
│   ├── middleware/
│   │   └── auth.middleware.js
│   │
│   ├── models/
│   │   ├── user.schema.js
│   │   └── product.schema.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── product.routes.js
│   │
│   └── app.js
│
├── server.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

# 🛠️ Tech Stack

| Technology | Purpose |
|------------|----------|
| Node.js | Runtime Environment |
| Express.js | Backend Framework |
| MongoDB | Database |
| Mongoose | ODM |
| JWT | Authentication |
| bcrypt.js | Password Hashing |
| dotenv | Environment Variables |
| Multer | File Upload Handling |
| ImageKit | Cloud Image Storage |
---

# ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/yourusername/e-commerce-api.git

cd e-commerce-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

IMAGEKIT_PUBLIC_KEY=your_public_key

IMAGEKIT_PRIVATE_KEY=your_private_key

IMAGEKIT_URL_ENDPOINT=your_url_endpoint

```

### 4. Run Server

Development Mode

```bash
npm run dev
```

Production Mode

```bash
npm start
```

---

# 🔑 Authentication Endpoints

## Register User 

### POST

```http
/api/auth/register
```

### Request Body

```json
{
  "name": "John Doe",
  "email": "john@gmail.com",
  "password": "password123"
}
```

### Response

```json
{
  "message": "User Registered Successfully"
}
```

---

## Login User

### POST

```http
/api/auth/login
```

### Request Body

```json
{
  "email": "john@gmail.com",
  "password": "password123"
}
```

### Cookies

```json
{
  "jwt_token": "jwt_token"
}
```

---

# 📦 Product Endpoints

> All routes require JWT Authentication.

---

## Create Product

### POST

```http
/api/products
```


---


### Request Body

```json
{
  "_id": "665f1d2d91f6b2f8f9a2a123",
  "name": "iPhone 15",
  "description": "Latest Apple Smartphone",
  "price": 79999,
  "category": "Mobile",
  "imageUrl": ["https://ik.imagekit.io/your-image.jpg"],
  "createdAt": "2026-05-30T10:00:00Z"
}

```

---

## Get All Products

### GET

```http
/api/products
```

---

## Get Product By ID

### GET

```http
/api/products/:id
```

---

## Update Product

### PUT

```http
/api/products/:id
```

---

## Delete Product

### DELETE

```http
/api/products/:id
```

---

# 🔒 Protected Route Example

```javascript
router.get(
    "/products",
    authMiddleware,
    getAllProducts
);
```

---

# 📄 Sample JWT Middleware Flow

```text
Client Login
      │
      ▼
 Receive JWT Token
      │
      ▼
 Send Token in Cookies
      │
      ▼
 Authentication Middleware
      │
      ▼
 Access Protected Routes
```

---

# 🧪 Testing API

You can test the API using:

- Postman
- Thunder Client
- Insomnia

---

# 📈 Future Improvements

- Product Image Uploads
- Category Management
- Shopping Cart
- Wishlist
- Order Management
- Payment Gateway Integration
- Inventory Management
- Admin Dashboard
- Product Reviews & Ratings

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push to GitHub

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# 👨‍💻 Author

**Avyaan Verma**

Full Stack Developer

GitHub: https://github.com/avyaanverma

LinkedIn: https://linkedin.com/in/avyaanverma

---

⭐ If you found this project useful, consider giving it a star.
