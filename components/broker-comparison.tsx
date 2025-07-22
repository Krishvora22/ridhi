import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export default function BrokerComparison() {
  const brokers = [
    {
      name: "Octopus",
      description: "The exchange provides you with a platform that matches your trader...",
      price: "Up to: $90 USDT",
      subtext: "Commissions for first users",
      rating: 4.8,
      reviews: 58,
      color: "bg-blue-600",
    },
    {
      name: "Creative Exchange",
      description: "The exchange provides you with a platform that matches your trader...",
      price: "Buy, trade & hold 700+",
      subtext: "Buy and sell crypto on Creative Exchange",
      rating: 4.7,
      reviews: 58,
      color: "bg-gray-800",
    },
    {
      name: "Planet Pro",
      description: "The exchange provides you with a platform that matches your trader...",
      price: "250+",
      subtext: "Cryptocurrencies Available for Trade. Get up to $25 in BTC free!",
      rating: 4.5,
      reviews: 58,
      color: "bg-red-500",
    },
    {
      name: "Planet Pro",
      description: "The exchange provides you with a platform that matches your trader...",
      price: "250+",
      subtext: "Cryptocurrencies Available for Trade. Get up to $25 in BTC free!",
      rating: 4.3,
      reviews: 58,
      color: "bg-yellow-500",
    },
    {
      name: "Planet Pro",
      description: "The exchange provides you with a platform that matches your trader...",
      price: "250+",
      subtext: "Cryptocurrencies Available for Trade. Get up to $25 in BTC free!",
      rating: 4.2,
      reviews: 58,
      color: "bg-pink-500",
    },
    {
      name: "Planet Pro",
      description: "The exchange provides you with a platform that matches your trader...",
      price: "250+",
      subtext: "Cryptocurrencies Available for Trade. Get up to $25 in BTC free!",
      rating: 4.1,
      reviews: 58,
      color: "bg-gray-900",
    },
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Global Broker Regulation Inquiry App!</h2>
        <p className="text-gray-600 text-center mb-12">
          User-friendly platform for buying and selling crypto! Collect picks for best crypto exchange.
        </p>

        <div className="space-y-4">
          {brokers.map((broker, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg p-6 flex flex-col lg:flex-row items-center justify-between hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center space-x-4 flex-1">
                <div
                  className={`w-12 h-12 ${broker.color} rounded-lg flex items-center justify-center text-white font-bold`}
                >
                  {broker.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{broker.name}</h3>
                  <p className="text-gray-600 text-sm">{broker.description}</p>
                </div>
              </div>

              <div className="flex items-center space-x-8 mt-4 lg:mt-0">
                <div className="text-center">
                  <div className="font-bold text-lg">{broker.price}</div>
                  <div className="text-sm text-gray-600">{broker.subtext}</div>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= Math.floor(broker.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold">{broker.rating}</span>
                  <span className="text-sm text-gray-600">({broker.reviews})</span>
                </div>

                <div className="flex space-x-2">
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded text-sm">
                    Visit
                  </Button>
                  <Button variant="outline" className="px-4 py-2 rounded text-sm bg-transparent">
                    Read Review
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
