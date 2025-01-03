import Secondaryhero from "@/components/SecondaryHero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Heart } from "lucide-react";
import Image from "next/image";
import { featuredProducts } from "./products/list-products";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full">
        {/* Hero section code from previous response */}
        <div className="absolute inset-0">
          <Image
            src="https://replicate.delivery/xezq/Cd8xE1PFmj4KFp1gGjybYlfNNLTcVDMxhaeF8oereO7Z4dEQB/out-0.png"
            alt="Hero background - Deer in nature"
            fill
            priority
            className="object-cover brightness-50"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-9xl font-bold text-center mb-8">
            Texas Drop Tine
          </h1>
          <p className="text-3xl mb-8 text-center max-w-2xl px-4">
            Premium Hunting Equipment, Handcrafted in Texas
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            Shop Now
          </Button>
        </div>
      </section>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center text-white bg-[#643A2C]">
        <div className="max-w-4xl space-y-8">
          {/* Main Heading */}
          <h1 className="text-9xl font-bold tracking-tight">
            GEAR UP FOR
          </h1>
          <h1 className="text-9xl font-bold tracking-tight">
            THE HUNT
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl">
            Premium products for hunters and outdoors enthusiasts
          </p>

          {/* CTA Button */}
          <Button size="lg" className="mt-8 bg-orange-600 hover:bg-orange-700 text-lg">
            SHOP NOW
          </Button>
        </div>
      </div>

      {/* Featured Products Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Shop our collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-gray-100 rounded-lg p-4 relative"
              >
                {/* Rating and Like Button */}
                <div className="flex justify-between items-center mb-4">
                  <Card className="inline-flex items-center px-2.5 py-2.5">
                    <span className="text-sm font-medium text-gray-700">
                      ★ 4/5
                    </span>
                  </Card>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 h-8 w-8 rounded-full bg-white"
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
                  <h3 className="text-lg font-semibold mb-1">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">subtitle</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Secondaryhero />

      {/* About Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6">We Build it Like They Use to...</h2>
            <p className="text-gray-600 mb-4">
              We specialize in creating high-quality, handcrafted outdoor
              equipment for hunting enthusiasts. Our products are built to last
              and designed with both beginners and experts in mind.
            </p>
            <p className="text-gray-600 mb-6">
              Each piece is carefully crafted in Texas using premium materials
              and time-tested techniques that ensure durability and
              functionality in the field.
            </p>
            <Button variant="outline">Learn More</Button>
          </div>
          <div className="flex-1">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="https://replicate.delivery/xezq/yd29Au3l5RI6MlKZmyjhhutKPNrSZgJtWU8XEzs1egrBFoAKA/out-0.png"
                alt="Workshop"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="p-6 rounded-lg border">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-8">
            Subscribe to our newsletter for the latest products and hunting
            tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg text-black"
            />
            <Button>Subscribe</Button>
          </form>
        </div>
      </section>
      

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Texas Drop Tine</h3>
            <p className="text-gray-400">
              Handcrafted outdoor equipment for hunters
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@texasdroptine.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Location: Austin, TX</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {/* Add social media icons here */}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}



const testimonials = [
  {
    id: 1,
    name: "John Doe",
    location: "Dallas, TX",
    avatar: "/avatar1.jpg",
    comment:
      "Best hunting equipment I've ever used. The quality is outstanding!",
  },
  {
    id: 2,
    name: "Jane Smith",
    location: "Houston, TX",
    avatar: "/avatar2.jpg",
    comment:
      "Incredible craftsmanship and attention to detail. Worth every penny.",
  },
  {
    id: 3,
    name: "Mike Johnson",
    location: "Austin, TX",
    avatar: "/avatar3.jpg",
    comment: "These products have completely elevated my hunting experience.",
  },
];
