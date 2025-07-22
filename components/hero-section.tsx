import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-yellow-100 to-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Global Broker Regulation Inquiry App!</h1>
        <p className="text-lg text-gray-600 mb-8">WikiFX Brokers regulated and regulations advisors</p>

        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Input
              type="text"
              placeholder="Please enter the name of the broker for inquiries"
              className="w-full pl-4 pr-12 py-3 rounded-lg border-gray-300 focus:border-yellow-400 focus:ring-yellow-400"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold">
            Search
          </Button>
        </div>
      </div>
    </section>
  )
}
