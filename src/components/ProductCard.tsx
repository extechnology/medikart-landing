
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  originalPrice?: string;
  discount?: string;
}

const ProductCard = ({ image, title, price, originalPrice, discount }: ProductCardProps) => {
  return (
    <Card className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <h3 className="text-sm font-medium text-gray-900 mb-3 line-clamp-3">
          {title}
        </h3>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900">₹ {price}</span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">₹ {originalPrice}</span>
            )}
          </div>
          {discount && (
            <span className="text-xs text-teal-600 font-medium">{discount}</span>
          )}
        </div>
        
        <Button className="w-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg">
          Buy Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
