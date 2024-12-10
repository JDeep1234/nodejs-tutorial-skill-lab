const jwt = require('jsonwebtoken');

const jwt_secret="182d413b5ff5b5a8ea13d90f0ba5acecc648a4d1e4abaea908bf4c6fd3929ff4d39f67e4bf9956471298cecb43db71eb6eed395c823a22b127b718ace698fd92";

const user = { id: 1, username: 'user123' };

const token = jwt.sign(user, jwt_secret, { expiresIn: '1h' });

console.log('JWT Token:', token);
