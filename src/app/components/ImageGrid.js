'use client';
import RoverImage from './RoverImage';
import { Carousel, CarouselContent, CarouselItem as ShadcnCarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const ImageGrid = ({ photos }) => {
  return (
    <Carousel className="p-4">
      <CarouselContent className="-ml-2 md:-ml-4">
        {photos.map(photo => (
          <ShadcnCarouselItem key={photo.id} className="pl-2 md:pl-4">
            <RoverImage
              imgSrc={photo.img_src}
              camera={photo.camera.full_name}
              date={photo.earth_date}
              className="max-w-full h-auto"
            />
          </ShadcnCarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 ml-2 md:ml-4" />
      <CarouselNext className="absolute right-0 mr-2 md:mr-4" />
    </Carousel>
  );
};

export default ImageGrid;
