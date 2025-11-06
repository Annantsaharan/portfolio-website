const bcrypt = require('bcryptjs');

// Replace this with your desired password
const password = 'admin123';

bcrypt.hash(password, 10).then(hash => {
    console.log('Your hashed password is:');
    console.log(hash);
    console.log('\nCopy this hash and replace YOUR_HASHED_PASSWORD in server/index.js');
});