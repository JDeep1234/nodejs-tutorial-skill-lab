const express = require('express');
const app = express();
const port = 3000;

// Middleware 1: Logs request details
function logRequestDetails(req, res, next) {
    console.log(`${req.method} request made to: ${req.url}`);
    next(); // Pass control to the next middleware or route handler
}

// Middleware 2: Validate request body
function validateRequestBody(req, res, next) {
    if (!req.body.name || !req.body.age) {
        return res.status(400).send('Missing required fields: name and age');
    }
    next(); // Pass control to the next middleware or route handler
}

// Middleware 3: Set response header
function setResponseHeader(req, res, next) {
    res.setHeader('X-Custom-Header', 'ExpressJS Demo');
    next(); // Pass control to the next middleware or route handler
}

// Route handler
function handleFormSubmission(req, res) {
    const { name, age } = req.body;
    res.send(`Received form submission: Name = ${name}, Age = ${age}`);
}

// Enable parsing of JSON request bodies
app.use(express.json());

// POST route with middleware
app.post('/submit', logRequestDetails, validateRequestBody, setResponseHeader, handleFormSubmission);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
