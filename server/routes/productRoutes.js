const express = require('express');
const Product = require('../models/Products');
const router = express.Router();n

// Créer un produit
router.post('/', async (req, res) => {
    try {
        const { name, description, price, image } = req.body;
        const product = new Product({ name, description, price, image });
        await product.save();
        res.status(201).json(product);
    } catch (err) {
        res.status(400).json({ message: 'Error creating product' });
    }
});

// Récupérer tous les produits
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching products' });
    }
});

module.exports = router;
