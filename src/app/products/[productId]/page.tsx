import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export default function ProductDetail() {
  return (
    <div className="min-h-screen  p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="relative">
            <Card className="bg-zinc-900 border-none overflow-hidden">
              <img
                src="https://isteam.wsimg.com/ip/17cbe4e3-7872-4879-b3f1-85c6fa07f6b1/ols/46_original/:/rs=w:600,h:600"
                alt="Shooting Target"
                className="w-full h-full object-cover"
              />
              <Badge 
                className="absolute top-4 right-4 bg-orange-500 text-white"
              >
                BESTSELLER
              </Badge>
            </Card>
          </div>

          {/* Product Details Section */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">Shooting Target (Double)</h1>
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                  ))}
                  <Star className="w-5 h-5 fill-orange-500 text-orange-500" style={{ clipPath: 'inset(0 50% 0 0)' }} />
                </div>
                <span className="text-gray-400">(4.5)</span>
              </div>
            </div>

            <div className="border-t border-zinc-800 pt-6">
              <div className="text-3xl font-bold text-orange-500">
                ${125.00}
              </div>
            </div>

            <div className="border-t border-zinc-800 pt-6">
              <h2 className="text-xl font-semibold mb-3">Product Details</h2>
              <p className="text-gray-400">
                Double AR 400 shooting targets, 3/8" thick. Fun target stands for the ranch.
              </p>
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

            <div className="space-y-4 pt-6">
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                Add to Cart
              </Button>
              <Button variant="outline" className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}