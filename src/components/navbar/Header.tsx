// components/Header.tsx
import Link from "next/link";
import { Search, ShoppingCart, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileMenu from "@/components/navbar/MobileMenu";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full">
      {/* Top Banner */}
      <div className="w-full bg-[#603913] text-white py-2">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm">
            TDO Offering Sales on all products through August! Stay Safe, See
            You Soon!
          </p>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-24">
            {/* Mobile Menu */}
            <div className="md:hidden">
              <MobileMenu />
            </div>

            {/* Logo/Icon */}
            <Link
              href="/"
              className="flex items-center space-x-2 text-[#603913]"
            >
              <Image
                src="/logo/logo.png" 
                alt="Texas Drop Tine Logo"
                // className="h-8 w-8"
                height={120}
                width={120}
              />
              {/* <span className="font-bold text-xl">Texas Drop Tine</span> */}
            </Link>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-600 hover:text-[#603913] transition-colors"
              >
                Home
              </Link>
              <Link
                href="/products"
                className="text-gray-600 hover:text-[#603913] transition-colors"
              >
                Products
              </Link>
              <Link
                href="/quality"
                className="text-gray-600 hover:text-[#603913] transition-colors"
              >
                Quality
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-[#603913] transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/payment"
                className="text-gray-600 hover:text-[#603913] transition-colors"
              >
                Payment
              </Link>
            </nav>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-600 hover:text-[#603913]"
              >
                <Search className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-600 hover:text-[#603913] relative"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
