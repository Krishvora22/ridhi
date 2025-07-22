export default function BlogSection() {
  const blogs = [
    {
      title: "Can CFD trading be successful?",
      image: "/placeholder.svg?height=200&width=300",
      category: "Trading",
    },
    {
      title: "How does CFD trading work?",
      image: "/placeholder.svg?height=200&width=300",
      category: "Education",
    },
    {
      title: "What does forex mean?",
      image: "/placeholder.svg?height=200&width=300",
      category: "Forex",
    },
  ]

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Latest Blogs</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${blog.image})` }}></div>
              <div className="p-6">
                <span className="text-sm text-yellow-600 font-semibold">{blog.category}</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-4">{blog.title}</h3>
                <p className="text-gray-600 text-sm">Read more about this topic...</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
