const express = require('express');
const product = require('./models/product');
const router = express.Router();

// Créer un produit
router.post('/', async (req, res) => {
    try {
        const { name, description, price, image, category } = req.body;
        const product = new product({ name, description, price, image, category });  // Assure-toi que le modèle Product inclut le champ 'category'
        await product.save();
        res.status(201).json(product);
    } catch (err) {
        res.status(400).json({ message: 'Error creating product' });
    }
});

// Récupérer tous les produits ou filtrer par catégorie
router.get('/', async (req, res) => {
    const category = req.query.category;  // Récupérer la catégorie de la requête (si elle existe)
    
    try {
        let products;
        if (category) {
            // Si une catégorie est fournie, filtre les produits par catégorie
            products = await Product.find({ category: category });
        } else {
            // Si aucune catégorie n'est donnée, retourne tous les produits
            products = await Product.find();
        }

        res.json(products);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching products' });
    }
});

module.exports = router;
