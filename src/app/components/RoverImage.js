'use client';
import Image from 'next/image';

const RoverImage = ({ imgSrc, camera, date }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center">
      <Image src={imgSrc} alt={`${camera} - ${date}`} width={400} height={400} className="rounded-md mb-4" />
      <p className="text-center text-gray-700">{camera}</p>
      <p className="text-center text-gray-500">{date}</p>
    </div>
  );
};

export default RoverImage;
