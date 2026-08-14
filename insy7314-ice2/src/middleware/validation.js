// src/middleware/validation.js
const validateBook = (req, res, next) => {
    const { title, author, genre, year, rating } = req.body;
    const errors = [];

    if (!title || title.trim() === '') errors.push('Title is required');
    if (!author || author.trim() === '') errors.push('Author is required');
    if (!genre || genre.trim() === '') errors.push('Genre is required');
    
    if (!year) {
        errors.push('Year is required');
    } else {
        const yearNum = parseInt(year);
        if (isNaN(yearNum) || yearNum < 1000 || yearNum > 2026) {
            errors.push('Year must be between 1000 and 2026');
        }
    }

    if (!rating && rating !== 0) {
        errors.push('Rating is required');
    } else {
        const ratingNum = parseFloat(rating);
        if (isNaN(ratingNum) || ratingNum < 0 || ratingNum > 5) {
            errors.push('Rating must be between 0 and 5');
        }
    }

    if (errors.length > 0) {
        return res.status(400).json({
            status: 'error',
            errors: errors
        });
    }

    next();
};

module.exports = { validateBook };