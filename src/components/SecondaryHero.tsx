// components/HeroSection.tsx
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

const Secondaryhero = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
        //   src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80"
          src="/images/off-road.jpeg"
          alt="Hero background"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <div
        //   initial={{ opacity: 0, y: 20 }}
        //   animate={{ opacity: 1, y: 0 }}
        //   transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Create Beautiful Experiences
          </h1>
          <p className="mb-8 text-lg text-gray-200 sm:text-xl md:text-2xl">
            Transform your ideas into reality with our powerful platform
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600"
            >
              Get Started
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secondaryhero;