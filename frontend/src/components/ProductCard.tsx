
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";
import { useState } from "react";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
}

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card className="group cursor-pointer overflow-hidden border-border/40 bg-card/50 backdrop-blur transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1" onClick={onClick}>
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {discount > 0 && (
          <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-600">
            -{discount}%
          </Badge>
        )}
        {!product.inStock && (
          <Badge variant="secondary" className="absolute top-3 right-3">
            Out of Stock
          </Badge>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 h-8 w-8 rounded-full bg-background/80 backdrop-blur opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
        >
          <Heart className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
        </Button>
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-2">
          <Badge variant="outline" className="text-xs">
            {product.category}
          </Badge>
          <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          
          <div className="flex items-center space-x-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-sm ${
                    i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              ({product.reviews})
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-primary">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            
            <Button
              size="sm"
              disabled={!product.inStock}
              onClick={(e) => {
                e.stopPropagation();
                // Add to cart logic
              }}
              className="shrink-0"
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              Add
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
