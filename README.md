# 📚 INSY7314 ICE Task 2 - Book API

## 📋 Project Information

| **Item** | **Details** |
|----------|-------------|
| **Module Code** | INSY7314 |
| **Module Name** | Information Systems 3D |
| **Assessment** | ICE Task 2 - Structured Backend API Development with Express |
| **Student Name** | Musa Janda |
| **Student Number** | [Your Student Number] |
| **Submission Date** | 14 August 2026 |

---

## 📝 Project Description

This project is a structured backend RESTful API built with **Express.js** for managing a collection of books. The API demonstrates:

- ✅ Proper folder structure (routes, controllers, middleware)
- ✅ Input validation middleware
- ✅ Controlled CORS configuration
- ✅ Central error handling
- ✅ CRUD operations (Create, Read, Update, Delete)

---

## 🚀 How to Run the Project

### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)
- Postman (for testing)

### Installation Steps

**1. Clone the repository**
```bash
git clone [your-github-repo-url]
cd insy7314-ice2

**2. Install dependencies**

bash
npm install
**3. Start the server**

bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
**4. Server will run on:**

text
http://localhost:4000
📁 Project Structure
text
insy7314-ice2/
├── src/
│   ├── controllers/
│   │   └── bookController.js      # Business logic for book operations
│   ├── routes/
│   │   └── bookRoutes.js          # Route definitions
│   ├── middleware/
│   │   ├── validation.js          # Input validation middleware
│   │   ├── cors.js                # CORS configuration
│   │   └── errorHandler.js        # Central error handling
│   └── app.js                     # Main application configuration
├── server.js                      # Entry point
├── package.json                   # Dependencies and scripts
├── package-lock.json
└── README.md                      # This file
**🌐 API Endpoints**
Base Routes
Method	Endpoint	Description
GET	/	Root route with API information
GET	/health	Health check endpoint
Book Routes (Base: /api/books)
Method	Endpoint	Description
GET	/api/books	Get all books
GET	/api/books/:id	Get a specific book by ID
POST	/api/books	Add a new book
PUT	/api/books/:id	Update an existing book
DELETE	/api/books/:id	Delete a book
**📝 Sample Request Bodies**
Add New Books (POST /api/books)
**Book 1**
json
{
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "genre": "Fantasy",
    "year": 1937,
    "rating": 4.9
}
**Book 2**
json
{
    "title": "Dune",
    "author": "Frank Herbert",
    "genre": "Science Fiction",
    "year": 1965,
    "rating": 4.8
}
**Book 3**
json
{
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "genre": "Romance",
    "year": 1813,
    "rating": 4.7
}
**Book 4**
json
{
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "genre": "Fiction",
    "year": 1951,
    "rating": 4.3
}
**Book 5**
json
{
    "title": "Brave New World",
    "author": "Aldous Huxley",
    "genre": "Dystopian",
    "year": 1932,
    "rating": 4.6
}
Update Book (PUT /api/books/:id)
json
{
    "title": "The Great Gatsby (Updated)",
    "author": "F. Scott Fitzgerald",
    "genre": "Classic",
    "year": 1925,
    "rating": 5.0
}
**✅ Validation Rules**
When adding or updating a book, the following validations are applied:

Field	Validation Rules
title	Required, cannot be empty, minimum 2 characters
author	Required, cannot be empty, minimum 2 characters
genre	Required, cannot be empty
year	Required, must be between 1000 and current year
rating	Required, must be between 0 and 5
**🧪 Testing with Postman**
**1. GET Root Route**
text
Method: GET
URL: http://localhost:4000
Expected Response:

json
{
    "message": "Welcome to the Book API",
    "endpoints": {
        "health": "/health",
        "books": "/api/books"
    }
}
**2. GET Health Check**
text
Method: GET
URL: http://localhost:4000/health
Expected Response:

json
{
    "status": "OK",
    "message": "Server is healthy and running",
    "timestamp": "2026-08-14T14:09:01.075Z"
}
**3. GET All Books**
text
Method: GET
URL: http://localhost:4000/api/books
Expected Response:

json
{
    "status": "success",
    "count": 3,
    "data": [
        {
            "id": "b1",
            "title": "The Great Gatsby",
            "author": "F. Scott Fitzgerald",
            "genre": "Classic",
            "year": 1925,
            "rating": 4.5
        },
        {
            "id": "b2",
            "title": "To Kill a Mockingbird",
            "author": "Harper Lee",
            "genre": "Fiction",
            "year": 1960,
            "rating": 4.8
        },
        {
            "id": "b3",
            "title": "1984",
            "author": "George Orwell",
            "genre": "Dystopian",
            "year": 1949,
            "rating": 4.7
        }
    ]
}
**4. GET Book by ID**
text
Method: GET
URL: http://localhost:4000/api/books/b1
Expected Response:

json
{
    "status": "success",
    "data": {
        "id": "b1",
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "genre": "Classic",
        "year": 1925,
        "rating": 4.5
    }
}
**5. POST - Add New Book**
text
Method: POST
URL: http://localhost:4000/api/books
Headers: Content-Type: application/json
Body: Raw JSON
Request:

json
{
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "genre": "Fantasy",
    "year": 1937,
    "rating": 4.9
}
Expected Response:

json
{
    "status": "success",
    "message": "Book added successfully",
    "data": {
        "id": "b1740000000000",
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "genre": "Fantasy",
        "year": 1937,
        "rating": 4.9
    }
}
**6. PUT - Update Book**
text
Method: PUT
URL: http://localhost:4000/api/books/b1
Headers: Content-Type: application/json
Body: Raw JSON
Request:

json
{
    "title": "The Great Gatsby (Updated)",
    "rating": 5.0
}
Expected Response:

json
{
    "status": "success",
    "message": "Book updated successfully",
    "data": {
        "id": "b1",
        "title": "The Great Gatsby (Updated)",
        "author": "F. Scott Fitzgerald",
        "genre": "Classic",
        "year": 1925,
        "rating": 5.0
    }
}
**7. DELETE - Remove Book**
text
Method: DELETE
URL: http://localhost:4000/api/books/b1
Expected Response:

json
{
    "status": "success",
    "message": "Book deleted successfully"
}
**🚨 Validation Error Responses**
**1. Missing Title**
Request:

json
{
    "author": "John Doe",
    "genre": "Fiction",
    "year": 2020,
    "rating": 4.5
}
Response:

json
{
    "status": "error",
    "message": "Validation failed",
    "errors": ["Title is required and cannot be empty"]
}
**2. Invalid Year**
Request:

json
{
    "title": "Test Book",
    "author": "John Doe",
    "genre": "Fiction",
    "year": 9999,
    "rating": 4.5
}
Response:

json
{
    "status": "error",
    "message": "Validation failed",
    "errors": ["Year must be between 1000 and 2026"]
}
**3. Invalid Rating**
Request:

json
{
    "title": "Test Book",
    "author": "John Doe",
    "genre": "Fiction",
    "year": 2020,
    "rating": 6
}
Response:

json
{
    "status": "error",
    "message": "Validation failed",
    "errors": ["Rating must be between 0 and 5"]
}
**🛠️ Technologies Used**
Technology	Purpose
Node.js	JavaScript runtime environment
Express.js	Web framework for building the API
CORS	Cross-Origin Resource Sharing configuration
Nodemon	Development tool for auto-reload
**📦 Dependencies**
json
{
    "dependencies": {
        "express": "^4.18.2",
        "cors": "^2.8.5",
        "dotenv": "^16.3.1"
    },
    "devDependencies": {
        "nodemon": "^3.0.1"
    }
}
**📸 Screenshots**
All route testing screenshots are included in the submission document:

□ Root Route (GET /)
□ Health Check (GET /health)
□ Get All Books (GET /api/books)
□ Get Book by ID (GET /api/books/:id)
□ Add Book 1 (POST /api/books)
□ Add Book 2 (POST /api/books)
□ Add Book 3 (POST /api/books)
□ Add Book 4 (POST /api/books)
□ Add Book 5 (POST /api/books)
□ Update Book (PUT /api/books/:id)
□ Delete Book (DELETE /api/books/:id)
□ Validation Error - Missing Title
□ Validation Error - Invalid Year
□ Validation Error - Invalid Rating
**👨‍💻 Author**
Field	Details
Name	Musa Janda
Student Number	st10456109
Module	INSY7314 - Information Systems 3D
Assessment	ICE Task 2
Submission Date	14 August 2026

**📚 References**
Express.js Documentation: https://expressjs.com/

Node.js Documentation: https://nodejs.org/

Postman Documentation: https://learning.postman.com/

CORS Documentation: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
