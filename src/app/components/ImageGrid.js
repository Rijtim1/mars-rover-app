'use client';
import { useEffect } from 'react';
import RoverImage from './RoverImage';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from '@/components/ui/card';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from '@/components/ui/tooltip';

const ImageGrid = ({ photos }) => {
  useEffect(() => {
    console.log('Photos:', photos); // Add log to check photos prop
  }, [photos]);

  return (
    <div className="p-4">
      <Carousel>
        <CarouselContent className="-ml-2 md:-ml-4">
          {photos.map((photo) => (
            <CarouselItem key={photo.id} className="pl-2 md:pl-4">
              <Card className="max-w-full h-auto">
                <CardHeader>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <CardTitle>{photo.camera.full_name}</CardTitle>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{photo.camera.full_name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </CardHeader>
                <CardContent>
                  <RoverImage
                    imgSrc={photo.img_src}
                    camera={photo.camera.full_name}
                    date={photo.earth_date}
                    className="max-w-full h-auto"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 ml-2 md:ml-4" />
        <CarouselNext className="absolute right-0 mr-2 md:mr-4" />
      </Carousel>
    </div>
  );
};

export default ImageGrid;
