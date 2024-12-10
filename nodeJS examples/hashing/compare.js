const bcrypt = require('bcrypt');

const storedHash = '$2b$10$.mZKsbZtIONa9jJ5Ui8dEOH3UALkNbI3T0dpU./HKk3.HOOm8PK0S'; 
const passwordInput = 'user_password';

bcrypt.compare(passwordInput, storedHash, (err, result) => {
    if (err) throw err;
    console.log(result);
});
