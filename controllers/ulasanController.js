const Ulasan = require('../models/ulasan');

// Create a new ulasan
exports.createUlasan = async (req, res, next) => {
    try {
        const { videoID, ulasan } = req.body;
        const newUlasan = await Ulasan.create({ videoID, ulasan });
        res.status(201).json(newUlasan);
    } catch (err) {
        next(err);
    }
};

// Get all ulasan
exports.getAllUlasan = async (req, res, next) => {
    try {
        const ulasan = await Ulasan.findAll();
        res.json(ulasan);
    } catch (err) {
        next(err);
    }
};

// Get a ulasan by ID
exports.getUlasanById = async (req, res, next) => {
    try {
        const ulasan = await Ulasan.findByPk(req.params.id);
        if (ulasan) {
            res.json(ulasan);
        } else {
            res.status(404).json({ message: 'Ulasan not found' });
        }
    } catch (err) {
        next(err);
    }
};

// Update a ulasan by ID
exports.updateUlasan = async (req, res, next) => {
    try {
        const { videoID, ulasan } = req.body;
        const [updated] = await Ulasan.update({ videoID, ulasan }, {
            where: { ulasanID: req.params.id }
        });

        if (updated) {
            const updatedUlasan = await Ulasan.findByPk(req.params.id);
            res.json(updatedUlasan);
        } else {
            res.status(404).json({ message: 'Ulasan not found' });
        }
    } catch (error) {
        next(error);
    }
};

// Delete a ulasan by ID
exports.deleteUlasan = async (req, res, next) => {
    try {
        const ulasan = await Ulasan.findByPk(req.params.id);
        if (ulasan) {
            await ulasan.destroy();
            res.json({ message: 'Ulasan deleted' });
        } else {
            res.status(404).json({ message: 'Ulasan not found' });
        }
    } catch (err) {
        next(err);
    }
};
