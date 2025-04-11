require('dotenv').config(); // <-- le tout premier !
const express = require('express');
const paymentRoutes = require('./routes/paymentRoutes');
const mongoose = require('mongoose');
const app = express();


// Vérification que la clé Stripe est bien chargée

if (!process.env.STRIPE_SECRET_KEY) {
    console.error("Erreur: la clé Stripe est absente de votre fichier .env.");
    process.exit(1); // Arrêter le serveur si la clé est manquante
}

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

console.log("Stripe Secret Key:", process.env.STRIPE_SECRET_KEY);  // Devrait afficher ta clé
// Middleware pour parser le body en JSON
app.use(express.json());

// Route pour gérer le paiement
app.use('/api/payment', paymentRoutes);

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
