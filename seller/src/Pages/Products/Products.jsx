// // pages/Products/Products.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const Products = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await axios.get('/api/products');
//         setProducts(res.data);
//       } catch (error) {
//         console.error('Erreur de récupération des produits:', error);
//       }
//     };
//     fetchProducts();
//   }, []);

//   return (
//     <div className="container mx-auto py-6">
//       <h1 className="text-3xl font-bold mb-4">Nos Produits</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {products.map((product) => (
//           <div key={product._id} className="bg-white shadow-lg rounded-lg p-4">
//             <img
//               src={product.imageUrl}  // Utilise l'URL de l'image ou le chemin
//               alt={product.name}
//               className="w-full h-64 object-cover rounded-t-lg"
//             />
//             <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
//             <p className="text-gray-600 mt-2">{product.description}</p>
//             <p className="text-lg font-bold mt-4">{product.price} €</p>
//             <Link to={`/product/${product._id}`} className="text-blue-500 hover:underline mt-2 inline-block">Voir les détails</Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;
// pages/Products/Products.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('/api/products');
        setProducts(res.data);
      } catch (error) {
        console.error('Erreur de récupération des produits:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Nos Produits</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product._id} className="bg-white shadow-lg rounded-lg p-4">
            <img
              src="https://img.freepik.com/photos-gratuite/petit-sac-main-dans-nature-morte-atelier_23-2151046503.jpg?t=st=1744224448~exp=1744228048~hmac=442234c471373eced842ba58f1a6ae21e61da7b0f7b11e9b251c1364ff1a64d3&w=740" // Utilise l'URL de l'image ou le chemin
              alt={product.name}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <p className="text-lg font-bold mt-4">{product.price} €</p>
            <Link to={`/product/${product._id}`} className="text-blue-500 hover:underline mt-2 inline-block">Voir les détails</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
