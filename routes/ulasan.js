const express = require('express');
const router = express.Router();
const ulasanController = require('../controllers/ulasanController');
const { authenticate, authorize } = require('../middleware/auth');


// Create a new ulasan
router.post('/', authenticate, authorize(['admin']), ulasanController.createUlasan);

// Get all ulasan
router.get('/', ulasanController.getAllUlasan);

// Get a ulasan by ID
router.get('/:id', ulasanController.getUlasanById);

// Update a ulasan by ID
router.put('/:id', authenticate, authorize(['admin']), ulasanController.updateUlasan);

// Delete a ulasan by ID
router.delete('/:id', authenticate, authorize(['admin']), ulasanController.deleteUlasan);

module.exports = router;
