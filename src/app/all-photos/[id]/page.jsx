import Image from "next/image";
import React from "react";

const PhotoDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch("https://pixgen-project12.vercel.app/data.json");

  const photos = await res.json();

  const photo = photos.find((p) => p.id === parseInt(id));

  if (!photo) {
    return (
      <div className="text-center mt-10 text-red-500 text-2xl">
        Photo not found
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Image Section */}
      <div className="w-full flex justify-center items-center bg-gray-100 rounded-2xl shadow-lg p-6">
        <Image
          src={photo.imageUrl}
          alt={photo.title}
          width={300}
          height={400}
          priority
          unoptimized
          className="rounded-xl object-contain w-auto h-auto max-h-[80vh]"
        />
      </div>

      {/* Details Section */}
      <div className="mt-8 space-y-6">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-800">{photo.title}</h1>

        {/* Prompt */}
        <div>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Prompt</h3>

          <p className="text-gray-600 leading-relaxed">{photo.prompt}</p>
        </div>

        {/* Category / Model / Resolution */}
        <div className="flex flex-wrap gap-4">
          <div className="bg-gray-100 px-4 py-2 rounded-lg">
            <span className="font-semibold">Category:</span> {photo.category}
          </div>

          <div className="bg-gray-100 px-4 py-2 rounded-lg">
            <span className="font-semibold">Model:</span> {photo.model}
          </div>

          <div className="bg-gray-100 px-4 py-2 rounded-lg">
            <span className="font-semibold">Resolution:</span>{" "}
            {photo.resolution}
          </div>
        </div>

        {/* Tags */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-gray-700">Tags</h3>

          <div className="flex flex-wrap gap-2">
            {photo.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Likes & Downloads */}
        <div className="flex flex-wrap gap-4">
          <div className="bg-pink-100 text-pink-700 px-5 py-2 rounded-lg font-medium">
            ❤️ {photo.likes} Likes
          </div>

          <div className="bg-green-100 text-green-700 px-5 py-2 rounded-lg font-medium">
            ⬇️ {photo.downloads} Downloads
          </div>
        </div>

        {/* Created Date */}
        <div className="text-gray-500 text-sm">
          Created: {new Date(photo.createdAt).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsPage;
