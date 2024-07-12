const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');
const { authenticate, authorize } = require('../middleware/auth');


// Create a new video
router.post('/', authenticate, authorize(['admin']), videoController.createVideo);

// Get all videos
router.get('/', videoController.getAllVideos);

// Get a video by ID
router.get('/:id', videoController.getVideoById);

// Update a video by ID
router.put('/:id',authenticate, authorize(['admin']), videoController.updateVideo);

// Delete a video by ID
router.delete('/:id',authenticate, authorize(['admin']), videoController.deleteVideo);

module.exports = router;
