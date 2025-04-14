import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from "../../components/ProductList/ProductList"; // adapte le chemin si nécessaire

const Products = () => {
  const [products, setProducts] = useState([]); // Déclaration de l'état pour les produits

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Filtrer les produits pour ne récupérer que les sacs à main
        const res = await axios.get('http://localhost:5000/api/products'); // Requête pour obtenir les produits
        setProducts(res.data); // Mise à jour de l'état avec les produits récupérés
      } catch (error) {
        console.error('Erreur de récupération des produits:', error); // Gestion des erreurs
      }
    };

    fetchProducts(); // Appel de la fonction pour récupérer les produits
  }, []); // Le tableau vide assure que ce code est exécuté une seule fois au démarrage

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Nos Sacs à Main</h1>
      
      {/* Utilisation du composant ProductList pour afficher les produits */}
      <ProductList products={products} />
    </div>
  );
};

export default Products;
