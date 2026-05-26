import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaDownload, FaHeart } from "react-icons/fa";

const PhotoCard = ({ photo }) => {
  return (
    <Card className="border rounded-xl p-4 mt-4">
      <div className="relative w-full aspect-square">
        <Image
          src={photo.imageUrl}
          alt={photo.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover w-full rounded-md"
        />
        <Chip className="absolute top-2 right-2">{photo.category}</Chip>
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
      <Link href={`/all-photos/${photo.id}`}>
        <Button variant="outline" className="w-full mt-4">
          View
        </Button>
      </Link>
    </Card>
  );
};

export default PhotoCard;
