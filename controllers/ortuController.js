const Ortu = require('../models/ortu');

// Get all Ortu records
exports.getAllOrtu = async (req, res) => {
    try {
        const ortu = await Ortu.findAll();
        res.status(200).json(ortu);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get Ortu record by ID
exports.getOrtuById = async (req, res) => {
    const { id } = req.params;
    try {
        const ortu = await Ortu.findByPk(id);
        if (ortu) {
            res.status(200).json(ortu);
        } else {
            res.status(404).json({ message: 'Ortu not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new Ortu record
exports.createOrtu = async (req, res) => {
    const { ortuID, userID, nama, hubungan, kontak } = req.body;
    try {
        const newOrtu = await Ortu.create({ ortuID, userID, nama, hubungan, kontak });
        res.status(201).json(newOrtu);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update an Ortu record
exports.updateOrtu = async (req, res) => {
    const { id } = req.params;
    const { ortuID, userID, nama, hubungan, kontak } = req.body;
    try {
        const ortu = await Ortu.findByPk(id);
        if (ortu) {
            ortu.ortuID = ortuID;
            ortu.userID = userID;
            ortu.nama = nama;
            ortu.hubungan = hubungan;
            ortu.kontak = kontak;
            await ortu.save();
            res.status(200).json(ortu);
        } else {
            res.status(404).json({ message: 'Ortu not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete an Ortu record
exports.deleteOrtu = async (req, res) => {
    const { id } = req.params;
    try {
        const ortu = await Ortu.findByPk(id);
        if (ortu) {
            await ortu.destroy();
            res.status(200).json({ message: 'Ortu deleted' });
        } else {
            res.status(404).json({ message: 'Ortu not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

