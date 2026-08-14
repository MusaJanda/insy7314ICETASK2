// src/middleware/errorHandler.js
// Central error handling middleware

/**
 * Global error handler for the entire application
 * Catches and formats all errors consistently
 */
const errorHandler = (err, req, res, next) => {
    console.error('Error:', err);

    // Determine status code
    const statusCode = err.status || 500;
    
    // Determine error response
    const response = {
        status: 'error',
        message: err.message || 'Internal Server Error',
        timestamp: new Date().toISOString()
    };

    // Add stack trace only in development
    if (process.env.NODE_ENV === 'development') {
        response.stack = err.stack;
    }

    // Send formatted error response
    res.status(statusCode).json(response);
};

// Custom error class for easier error handling
class AppError extends Error {
    constructor(message, status = 400) {
        super(message);
        this.status = status;
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = errorHandler;