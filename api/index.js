const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/products');
const cors = require('cors');

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Success')).catch(err => console.log('something went wrong: ' + err));


app.use(express.json());
app.options("*", cors({origin: 'http://localhost:3000', optionsSuccessStatus: 200}));
app.use(cors({origin: 'http://localhost:3000', optionsSuccessStatus: 200}));


app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);

app.listen(process.env.PORT || 8888, () => {
    console.log('Server is running on localhost:' + process.env.PORT);
})