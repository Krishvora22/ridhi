import { Star } from "lucide-react"

export default function ReviewsSection() {
  const reviews = [
    {
      name: "Lucy Scott Stevens",
      avatar: "/placeholder.svg?height=40&width=40",
      review: "What an amazing service. Fantastic customer service and great help.",
      rating: 5,
      platform: "Trustpilot",
    },
    {
      name: "Ronny Brooks",
      avatar: "/placeholder.svg?height=40&width=40",
      review: "Couldn't find most of their news app! Excellent app for the very easy.",
      rating: 5,
      platform: "Trustpilot",
    },
    {
      name: "Tracy Wells",
      avatar: "/placeholder.svg?height=40&width=40",
      review: "Excellent app and very good value for money. Highly recommend.",
      rating: 5,
      platform: "Trustpilot",
    },
    {
      name: "Sabrina Barbara",
      avatar: "/placeholder.svg?height=40&width=40",
      review: "Excellent Brokers, one of one of UK's leading trading platforms.",
      rating: 5,
      platform: "Trustpilot",
    },
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Recent reviews</h2>
          <div className="flex items-center space-x-2">
            <button className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center">←</button>
            <button className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center">→</button>
            <span className="text-sm text-gray-600 ml-2">See more</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <img
                  src={review.avatar || "/placeholder.svg"}
                  alt={review.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">{review.review}</p>
              <div className="flex items-center">
                <span className="text-xs text-gray-500">{review.platform}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
