import React from 'react';
// import ProductList from '../ProductList/ProductList';  // Ajustez le chemin selon l'emplacement réel du fichier

const Home = () => {
    return (
        <div className="text-3xl text-blue-700 text-center my-8">
        <img src="./assets/back.jpg" alt="" className="w-full h-full"/>
        <h1><strong>Bienvenue sur notre application E-shop</strong></h1>
            {/* <ProductList /> */}
        </div>
    );
};

export default Home;
