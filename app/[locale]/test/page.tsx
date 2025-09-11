export default function TestPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Test Page Working! 
        </h1>
        <p className="text-lg text-gray-600">
          If you can see this, the Next.js app is running correctly.
        </p>
        <div className="mt-8 space-y-4">
          <div className="bg-blue-100 p-4 rounded-lg">
            <p>✅ Next.js 15 - Working</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            <p>✅ Tailwind CSS - Working</p>
          </div>
          <div className="bg-purple-100 p-4 rounded-lg">
            <p>✅ App Router - Working</p>
          </div>
        </div>
      </div>
    </div>
  );
}