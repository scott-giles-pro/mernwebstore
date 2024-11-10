import React, { useEffect } from 'react';
import { Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useProductStore } from '../store/product.js';
import ProductCard from '../components/ProductCard.jsx';
import './HomePage.css';

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="products-container">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product._id} product={product} className="product-card" />
        ))
      ) : (
        <VStack spacing={8}>
          <Text fontSize="x-large" textAlign="center" fontWeight="bold" color="gray.500">
            No products found
          </Text>
          <Link to="/create">
            <Text as="span" fontSize="medium" color="blue.500" _hover={{ textDecoration: "underline" }}>
              Create a product
            </Text>
          </Link>
        </VStack>
      )}
    </div>
  );
};

export default HomePage;
