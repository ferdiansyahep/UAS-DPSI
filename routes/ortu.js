const express = require('express');
const router = express.Router();
const ortuController = require('../controllers/ortuController');

// Get all Ortu records
router.get('/', ortuController.getAllOrtu);

// Get Ortu record by ID
router.get('/:id', ortuController.getOrtuById);

// Create a new Ortu record
router.post('/', ortuController.createOrtu);

// Update an Ortu record
router.put('/:id', ortuController.updateOrtu);

// Delete an Ortu record
router.delete('/:id', ortuController.deleteOrtu);

module.exports = router;
