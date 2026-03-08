// app/not-found.tsx

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      {/* Main content */}
      <div className="text-center max-w-xl relative">
        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 text-transparent bg-clip-text bg-[length:200%] animate-gradient">
            not found
          </span>
        </h1>
      </div>
    </div>
  );
}
