'use client';
import Image from 'next/image';

const RoverImage = ({ imgSrc, camera, date }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Image src={imgSrc} alt={`${camera} - ${date}`} width={400} height={400} layout="responsive" className="rounded-md" />
      <p className="mt-2 text-gray-700">{camera} - {date}</p>
    </div>
  );
};

export default RoverImage;
