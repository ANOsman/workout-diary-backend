const express = require('express');

const router = express.Router();

const Workout = require('../models/workoutModel');

const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout, 
    updateWorkout
} = require('../controllers/workoutController')

const requireAuth = require('../middleware/requireAuth');

// require auth for all workout routes
router.use(requireAuth);

// GET all routes
router.get('/', getWorkouts)

// GET a single request
router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id', deleteWorkout)

// UPDATE a workout
router.patch('/:id', updateWorkout)

module.exports = router;