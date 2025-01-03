// components/MobileMenu.tsx
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px]">
        <SheetHeader>
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-4 mt-8">
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
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenu