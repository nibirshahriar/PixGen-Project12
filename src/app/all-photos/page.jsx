import PhotoCard from "@/components/PhotoCard";

const AllPhotoPage = async () => {
  const res = await fetch("https://pixgen-project12.vercel.app/data.json");
  const photos = await res.json();
  return (
    <div>
      <h2 className="text-2xl font-bold mt-6">All Photos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default AllPhotoPage;
