const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => {
        console.log('Post Title:', response.data.title);
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });
