"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";
import Link from "next/link";

import Image from "next/image";
import { featuredProducts } from "./list-products";
import { useRouter } from "next/navigation";

export default function Products() {
  const router = useRouter();

  const goToDetailPage = (productId: number) => {
    console.log("DIV CLICKED");
    router.push(`/products/${productId}`);
  };

  const handleFilter = (filter: string) => {
    console.log(filter);
  };

  return (
    <div className="max-w-7xl mx-auto ">
      <div>
        <div className="flex justify-between items-center mb-6 mt-12">
          <h2 className="text-4xl font-semibold text-center mb-0">
            All Products
          </h2>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Filter products..."
              className="border rounded-md p-2 mr-2"
            />
            <Button variant="default">Filter</Button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredProducts.map((product) => (
          <div
            // href={`/products/${product.id}`}
            onClick={() => goToDetailPage(product.id)}
            key={product.id}
            className="block group bg-gray-100 rounded-lg p-4 relative hover:shadow-lg transition-shadow"
          >
            {/* Rating and Like Button */}
            <div className="flex justify-between items-center mb-4">
              <Card className="inline-flex items-center px-2.5 py-2.5">
                <span className="text-sm font-medium text-gray-700">
                  ★ {product.rating}/5
                </span>
              </Card>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 h-8 w-8 rounded-full bg-white"
                onClick={(e) => e.preventDefault()}
              >
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            {/* Product Image */}
            <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>

            {/* Product Info */}
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
              <p className="text-gray-600 text-sm mb-2">subtitle</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
