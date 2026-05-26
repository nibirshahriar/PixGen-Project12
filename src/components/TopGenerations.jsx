import PhotoCard from "./PhotoCard";

const TopGenerations = async () => {
  const res = await fetch("https://pixgen-project12.vercel.app/data.json");
  const photos = await res.json();
  const topPhotos = photos.slice(0, 8);

  // console.log(topPhotos);
  return (
    <div>
      <h1 className="text-2xl font-bold mt-6">Top Generations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {topPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default TopGenerations;
