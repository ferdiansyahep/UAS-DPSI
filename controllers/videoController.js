const Video = require('../models/video');

// Create a new video
exports.createVideo = async (req, res, next) => {
    try {
        const { judul, topik } = req.body;
        const newVideo = await Video.create({ judul, topik });
        res.status(201).json(newVideo);
    } catch (err) {
        next(err);
    }
};

// Get all videos
exports.getAllVideos = async (req, res, next) => {
    try {
        const video = await Video.findAll();
        res.json(video);
    } catch (err) {
        next(err);
    }
};

// Get a video by ID
exports.getVideoById = async (req, res, next) => {
    try {
        const video = await Video.findByPk(req.params.id);
        if (video) {
            res.json(video);
        } else {
            res.status(404).json({ message: 'video not found' });
        }
    } catch (err) {
        next(err);
    }
};

// Update a video by ID
exports.updateVideo = async (req, res, next) => {
    try {
        const [updated] = await Video.update(req.body, {
            where: { videoID: req.params.id }
        });

        if (updated) {
            const updatedVideo = await Video.findByPk(req.params.id);
            res.json(updatedVideo);
        } else {
            res.status(404).json({ message: 'Video not found' });
        }
    } catch (error) {
        next(error);
    }
};

// Delete a video by ID
exports.deleteVideo = async (req, res, next) => {
    try {
        const video = await Video.findByPk(req.params.id);
        if (video) {
            await video.destroy();
            res.json({ message: 'video deleted' });
        } else {
            res.status(404).json({ message: 'video not found' });
        }
    } catch (err) {
        next(err);
    }
};
