import { Card } from "@heroui/react";
import Image from "next/image";
import { FaDownload, FaHeart } from "react-icons/fa";

const PhotoCard = ({ photo }) => {
  return (
    <Card className="border rounded-xl p-4 shadow-md mt-4">
      <div className="relative w-full aspect-square">
        <Image
          src={photo.imageUrl}
          alt={photo.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover w-full rounded-md"
        />
      </div>
      <div>
        <h2 className="font-medium">{photo.title}</h2>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2 mt-2">
          <p>
            {" "}
            <FaHeart />{" "}
          </p>
          <p>{photo.likes}</p>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <p>
            {" "}
            <FaDownload />{" "}
          </p>
          <p>{photo.downloads}</p>
        </div>
      </div>
    </Card>
  );
};

export default PhotoCard;
