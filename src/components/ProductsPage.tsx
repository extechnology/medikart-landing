
import React, { useState } from 'react';
import Header from './Header';
import ProductCard from './ProductCard';
import Footer from './Footer';

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Gut Health', 'Health Supplements', 'Health Foods & Drinks', 'Personal Care'];
  
  const products = [
    {
      id: 1,
      image: 'M01.jpg',
      title: 'Dr. Morepen Probiotics & Laxative for Men and Women (Pack of 2) – Digestive Health Supplement',
      price: '324.00',
      
    },
    {
      id: 2,
      image: 'M02.jpg',
      title: 'Intebact Probiotic Laxative – Best Solution for Constipation Relief',
      price: '180.00'
    },
    {
      id: 3,
      image: 'M03.jpg',
      title: 'Intebact Probiotic Capsule 10s - Best Solution for Gastrointestinal Health',
      price: '258.00',
      originalPrice: '299.00',
      discount: '10% OFF'
    },
    {
      id: 4,
      image: 'M04.jpg',
      title: 'Intebact Insta Probiotic 5BN (1.5GM) - 6 Sachets',
      price: '372.60',
      originalPrice: '410.00',
      discount: '10% OFF'
    },
    {
      id: 5,
      image: 'M05.jpg',
      title: 'Intebact Probiotic Drop 10BN (10ML)',
      price: '593.10',
      originalPrice: '659.00',
      discount: '10% OFF'
    },
    {
      id: 6,
      image: 'M06.jpg',
      title: 'Fat Burner',
      price: '499.00'
    },
    {
      id: 7,
      image: 'M07.jpg',
      title: 'Omega-3 1250mg Deep Sea Fish Oil Triple Strength Pack of 2',
      price: '1,219.00'
    },
    {
      id: 8,
      image: 'M08.jpg',
      title: 'Biotin+ Advanced (60 Tablets)',
      price: '499.00',
      originalPrice: '999.00',
      discount: '50% OFF'
    },
    {
      id: 9,
      image: 'M09.jpg',
      title: 'IRON & ZINC TAB 60',
      price: '599.00'
    },
    {
      id: 10,
      image: 'M10.jpg',
      title: 'Gokshura Tablets For Mens Wellness - Boost Stamina (60 Tablets)',
      price: '379.00',
      originalPrice: '799.00',
      discount: '52% OFF'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Our <span className="text-teal-500">Products</span>
          </h1>
          <p className="text-gray-600">Explore Our Extensive Range of Trusted Medical Products</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-teal-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-teal-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              originalPrice={product.originalPrice}
              discount={product.discount}
            />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductsPage;
