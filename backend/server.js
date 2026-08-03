const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// A basic "GET" route
app.get('/', (req, res) => {
    res.json({ message: "Welcome to your Node.js backend!" });
});

// A sample API data endpoint 
app.get('/api/users', (req, res) => {
    const users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' }
    ];
    res.json(users);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running successfully on port ${PORT}`);
});
