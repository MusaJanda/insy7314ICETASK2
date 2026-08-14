// src/middleware/cors.js
// Controlled CORS configuration

const cors = require('cors');

// List of allowed origins
const allowedOrigins = [
    'http://localhost:3000',    // Development frontend
    'http://localhost:3001',    // Alternative dev frontend
    'https://your-frontend-domain.com' // Production frontend
];

// CORS options configuration
const corsOptions = {
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps, curl requests)
        if (!origin) return callback(null, true);

        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    optionsSuccessStatus: 200
};

// Export the CORS middleware
const corsMiddleware = cors(corsOptions);

module.exports = corsMiddleware;