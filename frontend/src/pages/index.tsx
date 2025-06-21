"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gem, Truck, Shield, Star } from "lucide-react";

export default function Index() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
      navigate(`/products?search=${encodeURIComponent(query)}`);
    }
  };

  const features = [
    {
      icon: <Gem className="h-8 w-8 text-primary" />,
      title: "Premium Jewelry",
      description: "Handcrafted pieces from finest materials and precious stones"
    },
    {
      icon: <Truck className="h-8 w-8 text-primary" />,
      title: "Free Shipping",
      description: "Complimentary shipping on orders over $200"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Authenticity Guarantee",
      description: "All pieces come with certificate of authenticity"
    },
    {
      icon: <Star className="h-8 w-8 text-primary" />,
      title: "Lifetime Warranty",
      description: "Free repairs and maintenance for life"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <Navbar onSearch={handleSearch} />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center py-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Welcome to JewelCraft
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover exquisite handcrafted jewelry. From elegant earrings to stunning necklaces, 
            find the perfect piece to express your unique style.
          </p>
          <div className="space-x-4">
            <Button 
              size="lg" 
              onClick={() => navigate("/products")}
              className="text-lg px-8 py-4"
            >
              Shop Collection
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-4"
            >
              Custom Design
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose JewelCraft?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-border/40 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-16 bg-card/30 rounded-lg border border-border/40">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Piece?</h2>
          <p className="text-muted-foreground mb-6 text-lg">
            Browse our curated collection of fine jewelry and discover pieces that tell your story.
          </p>
          <Button 
            size="lg"
            onClick={() => navigate("/products")}
            className="text-lg px-8 py-4"
          >
            Explore Jewelry
          </Button>
        </div>
      </main>
    </div>
  );
}
