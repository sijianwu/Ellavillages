'use client';

export default function WorkingPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          🎉 Working Page!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          This page works without any complex components.
        </p>
        <div className="space-y-4">
          <div className="bg-green-100 p-4 rounded-lg">
            <p className="text-green-800">✅ Next.js routing - Working</p>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg">
            <p className="text-blue-800">✅ Tailwind CSS - Working</p>
          </div>
          <div className="bg-purple-100 p-4 rounded-lg">
            <p className="text-purple-800">✅ [locale] routing - Working</p>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-sm text-gray-500">
            URL: /en/working-page
          </p>
        </div>
      </div>
    </div>
  );
}