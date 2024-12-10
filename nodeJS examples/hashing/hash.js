const bcrypt = require('bcrypt');

// Hash a password
const password = 'user_password';
bcrypt.hash(password, 10, (err, hash) => {
    if (err) throw err;
    console.log('Hashed password:', hash);
});
