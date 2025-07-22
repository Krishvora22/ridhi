import { Button } from "@/components/ui/button"

export default function TestimonialSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Help millions make the right choice</h2>
            <p className="text-gray-600 mb-6">
              Share your experience on Trustpilot, where real reviews make a difference.
            </p>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg">Share your story</Button>

            <div className="flex items-center mt-6 space-x-4">
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div key={star} className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">★</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              className="bg-orange-500 rounded-lg h-32 bg-cover bg-center"
              style={{ backgroundImage: "url(/placeholder.svg?height=128&width=200&query=trading charts orange)" }}
            ></div>
            <div
              className="bg-gray-900 rounded-lg h-32 bg-cover bg-center"
              style={{ backgroundImage: "url(/placeholder.svg?height=128&width=200&query=financial data dark)" }}
            ></div>
            <div
              className="bg-teal-500 rounded-lg h-32 bg-cover bg-center"
              style={{ backgroundImage: "url(/placeholder.svg?height=128&width=200&query=growth arrow teal)" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}
