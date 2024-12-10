const jwt = require('jsonwebtoken');

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ1c2VyMTIzIiwiaWF0IjoxNzMzNTc3NjU5LCJleHAiOjE3MzM1ODEyNTl9.vG0zCewCJI7QuFuAWvt0aHLKIClJ_eOiS61_KHCfFkE";
const jwt_secret = "182d413b5ff5b5a8ea13d90f0ba5acecc648a4d1e4abaea908bf4c6fd3929ff4d39f67e4bf9956471298cecb43db71eb6eed395c823a22b127b718ace698fd92";

jwt.verify(token, jwt_secret, (err, decoded) => {
    if (err) {
        return console.log('Token is invalid');
    }
    console.log('Decoded JWT:', decoded); 
});