"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { featuredProducts } from "../list-products";
import { useState } from "react";

interface PageParams {
  productId: string;
}

export default function ProductDetail({ params }: { params: PageParams }) {
  // const router = useRouter();
  const { productId } = params;
  const product = featuredProducts.find((p) => p.id === Number(productId));
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (change: number) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  if (!productId) {
    // router.push('/dashboard/team-members');
    return null;
  }
  return (
    <div className="min-h-screen  p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="relative">
            <Card className="bg-zinc-900 border-none overflow-hidden">
              <img
                src={product?.image}
                alt="Shooting Target"
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-4 right-4 bg-orange-500 text-white">
                {product?.ranking}
              </Badge>
            </Card>
          </div>

          {/* Product Details Section */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">{product?.title}</h1>
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(4)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-orange-500 text-orange-500"
                    />
                  ))}
                  <Star
                    className="w-5 h-5 fill-orange-500 text-orange-500"
                    style={{ clipPath: "inset(0 50% 0 0)" }}
                  />
                </div>
                <span className="text-gray-400">(4.5)</span>
              </div>
            </div>

            <div className="border-t border-zinc-800 pt-6">
              <div className="text-3xl font-bold text-orange-500">
                ${product?.price.sale_price}
              </div>
            </div>

            <div className="border-t border-zinc-800 pt-6">
              <h2 className="text-xl font-semibold mb-3">Product Details</h2>
              <p className="text-gray-400">{product?.details}</p>
            </div>

            <div className="border-t border-zinc-800 pt-6">
              <h2 className="text-xl font-semibold mb-3">Specifications</h2>
              <ul className="space-y-2 text-gray-400">
                <li>• Material: AR 400 Steel</li>
                <li>• Thickness: 3/8 inch</li>
                <li>• Type: Double Target</li>
                <li>• Usage: Ranch/Outdoor</li>
              </ul>
            </div>


            <div className="border-t border-zinc-800 pt-6">
              <h2 className="text-xl font-semibold mb-3">Quantity</h2>
              <div className="flex items-center space-x-4">
                <Button 
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                  onClick={() => handleQuantityChange(-1)}
                >
                  <span className="text-lg">-</span>
                </Button>
                <span className="text-lg font-medium w-12 text-center">{quantity}</span>
                <Button
                  variant="outline" 
                  size="icon"
                  className="h-8 w-8 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                  onClick={() => handleQuantityChange(1)}
                >
                  <span className="text-lg">+</span>
                </Button>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                Add to Cart
              </Button>
              <Button
                variant="outline"
                className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
              >
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
