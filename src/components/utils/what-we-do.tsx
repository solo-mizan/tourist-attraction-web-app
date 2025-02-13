export default function WhatWeDo() {
    return (
        <section className=" py-12 px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Do</h2>
                <p className="text-lg text-gray-700 mb-8">
                    At <span className="font-semibold text-blue-600">Tourist Spot Finder</span>, we make travel planning effortless by providing detailed insights into top-rated destinations worldwide.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {features.map((feature, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center">
                        <div className="text-blue-600 text-4xl mb-4">{feature.icon}</div>
                        <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                        <p className="text-gray-600 mt-2">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

const features = [
    {
        icon: "🌍",
        title: "Explore Top Destinations",
        description: "Discover breathtaking tourist spots worldwide with detailed insights and travel tips.",
    },
    {
        icon: "📅",
        title: "Best Time to Visit",
        description: "Plan your trip wisely with our season-based recommendations for each location.",
    },
    {
        icon: "🏨",
        title: "Budget-Friendly Stays",
        description: "Check out the average hotel cost per night to make your trip budget-friendly.",
    },
    {
        icon: "📸",
        title: "High-Quality Images",
        description: "Visualize your destination with stunning images to inspire your next adventure.",
    },
    {
        icon: "⭐",
        title: "User Reviews & Ratings",
        description: "Read real traveler reviews and ratings to make informed travel decisions.",
    },
    {
        icon: "📍",
        title: "Interactive Maps",
        description: "Find the exact location of each tourist spot easily with integrated maps.",
    }
];
