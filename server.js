require('dotenv').config();
const express = require('express')
const workoutRoutes = require('./routes/workouts');
const userRoutes = require('./routes/user');
const mongoose = require('mongoose');
const cors = require('cors');




// express app
const app = express();

app.use(cors());

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log('request path ', req.path);
    console.log('request method ', req.method);
    next();
})


app.use('/api/workouts', workoutRoutes);
app.use('/api/user', userRoutes);


mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            app.listen(process.env.PORT, () => {
                console.log('connected to database and listening on port 4000!');
            })
        })
        .catch((error) => {
            console.log(error)
        })
