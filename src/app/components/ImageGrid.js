'use client';
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
  CardFooter,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from '@/components/ui/tooltip';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from '@/components/ui/pagination';

const ImageGrid = ({ photos }) => {
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
                  {/* <CardDescription>{photo.earth_date}</CardDescription> */}
                </CardHeader>
                <CardContent>
                  <RoverImage
                    imgSrc={photo.img_src}
                    camera={photo.camera.full_name}
                    date={photo.earth_date}
                    className="max-w-full h-auto"
                  />
                </CardContent>
                <CardFooter>
                  {/* <p>{photo.rover.name}</p> */}
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 ml-2 md:ml-4" />
        <CarouselNext className="absolute right-0 mr-2 md:mr-4" />
      </Carousel>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default ImageGrid;
