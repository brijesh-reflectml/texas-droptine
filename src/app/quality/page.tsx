// pages/commitment-to-quality.tsx
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"

export default function QualityCommitment() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-black">
        <div className="absolute inset-0">
          <Image
            src="/images/hunter.png"
            alt="Quality Background"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="relative flex items-center justify-center h-full">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Commitment to Quality
            </h1>
            <p className="text-xl md:text-2xl font-light">
              Excellence in Every Detail
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Quality Statement Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Quality Promise
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              With decades of experience and unwavering dedication, we maintain the
              highest standards in everything we do. Our commitment to quality
              isn't just a statement – it's our foundation. Every product we
              offer represents our dedication to excellence and customer
              satisfaction.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl relative h-[400px]">
            <Image
              src="/images/off-road.jpeg"
              alt="Craftsmanship"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Quality Features */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            The Pillars of Our Quality
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityFeatures.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="bg-gray-900 text-white rounded-xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Our Quality Guarantee</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We stand behind every product and service we offer with a 100%
            satisfaction guarantee. Your trust in our quality is our highest
            priority.
          </p>
          <Button
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white"
          >
            Learn More
          </Button>
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Our Quality Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {qualityProcess.map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const qualityFeatures = [
  {
    icon: "🎯",
    title: "Premium Materials",
    description: "Only the finest materials meet our strict quality standards.",
  },
  {
    icon: "⚡",
    title: "Expert Craftsmanship",
    description: "Skilled professionals with years of specialized experience.",
  },
  {
    icon: "🛡️",
    title: "Rigorous Testing",
    description: "Every product undergoes comprehensive quality testing.",
  },
  {
    icon: "🌟",
    title: "Superior Performance",
    description: "Designed and built to exceed expectations.",
  },
]

const qualityProcess = [
  {
    title: "Selection",
    description:
      "Careful selection of premium materials and components.",
  },
  {
    title: "Crafting",
    description:
      "Expert craftsmanship with attention to every detail.",
  },
  {
    title: "Verification",
    description:
      "Thorough quality control and performance testing.",
  },
]