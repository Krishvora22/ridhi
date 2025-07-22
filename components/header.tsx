"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Globe, User, Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Broker", href: "#", hasDropdown: true },
    { name: "Market", href: "#" },
    { name: "Rankings", href: "#" },
    { name: "Regulators", href: "#" },
    { name: "VPS", href: "#", hasDropdown: true },
    { name: "Live", href: "#" },
    { name: "Community", href: "#" },
  ]

  return (
    <header className="bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-yellow-400 px-4 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black text-sm px-4 py-1 rounded-full">
            WikiFX APP
          </Button>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center bg-white rounded-full px-3 py-1">
              <Globe className="w-4 h-4 mr-2" />
              <span className="text-sm">Choose your local website</span>
            </div>
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span className="text-sm">English</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black text-sm px-4 py-1 rounded">Download</Button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-yellow-400 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="hidden lg:flex items-center">
                <a href={item.href} className="text-black hover:text-gray-700 font-medium flex items-center">
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4 ml-1" />}
                </a>
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="block py-2 text-black hover:text-gray-700 font-medium">
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
