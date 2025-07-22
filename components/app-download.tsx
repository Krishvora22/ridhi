import { Button } from "@/components/ui/button"
import { Apple, Play } from "lucide-react"

export default function AppDownload() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-yellow-100 to-orange-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 mb-2">To view more</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Please download WikiFX APP</h2>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-3">
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </Button>

              <Button className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-3">
                <Play className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="flex justify-center space-x-4">
              <div className="transform rotate-12">
                <img
                  src="/placeholder.svg?height=400&width=200"
                  alt="Mobile App"
                  className="w-48 h-96 rounded-3xl shadow-2xl"
                />
              </div>
              <div className="transform -rotate-12">
                <img
                  src="/placeholder.svg?height=400&width=200"
                  alt="Trading App"
                  className="w-48 h-96 rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
