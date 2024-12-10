const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

let users = []; // Example in-memory users store

// Register route
app.post('/register', (req, res) => {
    const { username, password, role } = req.body;
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) return res.status(500).send('Error hashing password');
        
        // Save user (in a real app, you would save it to a database)
        users.push({ username, password: hash, role: role || 'user' });
        res.status(201).send('User registered');
    });
});

// Login route (authenticate and issue JWT)
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    
    if (!user) return res.status(404).send('User not found');
    
    bcrypt.compare(password, user.password, (err, match) => {
        if (err || !match) return res.status(401).send('Invalid credentials');

        // Generate JWT token
        const token = jwt.sign({ id: user.username, role: user.role }, 'your_jwt_secret', { expiresIn: '1h' });
        res.json({ token });
    });
});

// Protect a route based on roles (only admin can access)
function requireRole(role) {
    return (req, res, next) => {
        const token = req.headers['authorization']?.split(' ')[1];
        if (!token) return res.status(401).send('Unauthorized');
        
        jwt.verify(token, 'your_jwt_secret', (err, decoded) => {
            if (err) return res.status(401).send('Unauthorized');
            
            if (decoded.role !== role) return res.status(403).send('Forbidden');
            req.user = decoded;
            next();
        });
    };
}

// Admin route (protected by role)
app.get('/admin', requireRole('admin'), (req, res) => {
    res.send('Welcome Admin!');
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
