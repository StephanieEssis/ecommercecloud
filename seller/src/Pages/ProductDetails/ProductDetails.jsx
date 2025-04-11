import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../utils/axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => {
        console.error("Erreur lors de la récupération du produit:", err);
        alert("Produit non trouvé !");
      });
  }, [id]);

  if (!product)
    return (
      <div className="p-4 flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600"></div>
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto p-4">
      <button
        onClick={() => window.history.back()}
        className="mb-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Retour
      </button>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image produit avec zoom */}
        <div className="w-full md:w-1/2">
          <img
            src={product.image || "/default-image.jpg"}
            alt={product.name}
            className="w-full h-80 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform"
          />
        </div>
        {/* Détails du produit */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
          <p className="text-lg text-gray-700 mb-4">{product.description}</p>
          <p className="text-xl text-blue-600 font-semibold mb-4">${product.price}</p>

          {/* Avis clients */}
          <div className="flex items-center mb-4">
            <span className="text-yellow-500">★★★★☆</span>
            <span className="ml-2 text-sm text-gray-500">(20 avis)</span>
          </div>

          {/* Spécifications du produit */}
          <div className="text-gray-700 mb-6">
            <h2 className="text-xl font-semibold">Détails du produit</h2>
            <ul className="list-disc list-inside">
              <li>Poids : 1kg</li>
              <li>Dimensions : 20x10x5 cm</li>
              <li>Disponible en plusieurs couleurs</li>
            </ul>
          </div>

          {/* Boutons d'action */}
          <div className="flex gap-4">
            <button
              onClick={() => alert("Ajouté au panier")}
              className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300 transform hover:scale-105"
            >
              Ajouter au panier
            </button>

            {/* Bouton de partage */}
            <button
              onClick={() => alert("Produit partagé !")}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-300 transition duration-300"
            >
              Partager
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
