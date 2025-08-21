export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-8 max-w-2xl mx-auto">
        {/* Main Hello World Heading */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
            Hello World
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Welcome Message */}
        <div className="space-y-6">
          <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
            Welcome to your simple and elegant Hello World page
          </p>
          <p className="text-lg text-gray-600 max-w-lg mx-auto">
            Built with Next.js and styled with Tailwind CSS for a modern, responsive experience.
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center space-x-4 mt-12">
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
          <div className="w-4 h-4 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-8 text-center">
        <p className="text-sm text-gray-500">
          Powered by Next.js & Tailwind CSS
        </p>
      </footer>
    </main>
  );
}