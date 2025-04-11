import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../utils/axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    console.log("Ajouté au panier :", product);
    alert(`${product.name} ajouté au panier !`);
  };

  const handleSeeMore = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Nos Produits</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition ease-in-out duration-300 transform hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-sm text-gray-600 my-2">{product.description}</p>
              <p className="text-xl text-blue-600 font-bold">${product.price}</p>
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition duration-300"
                >
                  Ajouter au panier
                </button>
                <button
                  onClick={() => handleSeeMore(product._id)}
                  className="text-blue-600 hover:underline"
                >
                  Voir plus
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
