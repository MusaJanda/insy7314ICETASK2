// src/controllers/bookController.js
let books = [
    { id: 'b1', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Classic', year: 1925, rating: 4.5 },
    { id: 'b2', title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction', year: 1960, rating: 4.8 },
    { id: 'b3', title: '1984', author: 'George Orwell', genre: 'Dystopian', year: 1949, rating: 4.7 }
];

const getAllBooks = (req, res) => {
    res.json({
        status: 'success',
        count: books.length,
        data: books
    });
};

const getBookById = (req, res) => {
    const book = books.find(b => b.id === req.params.id);
    if (!book) {
        return res.status(404).json({ error: 'Book not found' });
    }
    res.json({ status: 'success', data: book });
};

const createBook = (req, res) => {
    const { title, author, genre, year, rating } = req.body;
    const newBook = {
        id: `b${Date.now()}`,
        title,
        author,
        genre,
        year: parseInt(year),
        rating: parseFloat(rating)
    };
    books.push(newBook);
    res.status(201).json({
        status: 'success',
        message: 'Book added',
        data: newBook
    });
};

const updateBook = (req, res) => {
    const index = books.findIndex(b => b.id === req.params.id);
    if (index === -1) {
        return res.status(404).json({ error: 'Book not found' });
    }
    books[index] = { ...books[index], ...req.body };
    res.json({
        status: 'success',
        message: 'Book updated',
        data: books[index]
    });
};

const deleteBook = (req, res) => {
    const index = books.findIndex(b => b.id === req.params.id);
    if (index === -1) {
        return res.status(404).json({ error: 'Book not found' });
    }
    books.splice(index, 1);
    res.json({
        status: 'success',
        message: 'Book deleted'
    });
};

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
};