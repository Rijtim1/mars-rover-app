'use client';
import RoverImage from './RoverImage';

const ImageGrid = ({ photos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {photos.map(photo => (
        <RoverImage key={photo.id} imgSrc={photo.img_src} camera={photo.camera.full_name} date={photo.earth_date} />
      ))}
    </div>
  );
};

export default ImageGrid;
