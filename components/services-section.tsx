import { TrendingUp, Users, Shield, Globe, Car, Building } from "lucide-react"

export default function ServicesSection() {
  const services = [
    { icon: TrendingUp, label: "Broker", color: "bg-yellow-400" },
    { icon: Users, label: "IB/CIB", color: "bg-yellow-400" },
    { icon: Shield, label: "Exposure", color: "bg-yellow-400" },
    { icon: Globe, label: "Forex", color: "bg-yellow-400" },
    { icon: Car, label: "PAMM", color: "bg-yellow-400" },
    { icon: Building, label: "HYIP", color: "bg-yellow-400" },
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">What are you looking for?</h2>
          <div className="flex items-center space-x-2">
            <button className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center">←</button>
            <button className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center">→</button>
            <span className="text-sm text-gray-600 ml-2">See more</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.color} p-6 rounded-lg text-center hover:shadow-lg transition-shadow cursor-pointer`}
            >
              <service.icon className="w-8 h-8 mx-auto mb-3 text-black" />
              <span className="text-black font-semibold">{service.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
