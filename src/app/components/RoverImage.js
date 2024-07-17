'use client';
import Image from 'next/image';
import { useState } from 'react';

const RoverImage = ({ imgSrc, camera, date }) => {
  const [isValidImage, setIsValidImage] = useState(true);

  const handleImageError = () => {
    setIsValidImage(false);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center">
      {isValidImage ? (
        <Image
          src={imgSrc}
          alt={`${camera} - ${date}`}
          width={400}
          height={400}
          className="rounded-md mb-4"
          onError={handleImageError}
        />
      ) : (
        <div className="flex items-center justify-center h-96 w-96 bg-gray-200 rounded-md">
          <p className="text-gray-500">Image not available</p>
        </div>
      )}
      <p className="text-center text-gray-700 mt-2">{camera}</p>
      <p className="text-center text-gray-500">{date}</p>
    </div>
  );
};

export default RoverImage;
