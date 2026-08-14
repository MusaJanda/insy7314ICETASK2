// src/app.js - Main application configuration
const express = require('express');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// ============ MIDDLEWARE ============

// 1. Controlled CORS Configuration
const corsOptions = {
    origin: 'http://localhost:3000', // Allow only this origin
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// 2. Parse JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ============ ROUTES ============

// Root route
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the API',
        endpoints: {
            health: '/health',
            items: '/api/books', // Change 'books' to your item name
            itemById: '/api/books/:id'
        }
    });
});

// Health check route
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        message: 'Server is healthy and running',
        timestamp: new Date().toISOString()
    });
});

// Item routes (mount at /api/books or your item name)
app.use('/api/books', bookRoutes); // Change 'books' to your item

// ============ ERROR HANDLING ============

// Central error handler - must be last
app.use(errorHandler);

// 404 handler for unmatched routes
app.use((req, res) => {
    res.status(404).json({
        status: 'error',
        message: 'Route not found'
    });
});

module.exports = app;