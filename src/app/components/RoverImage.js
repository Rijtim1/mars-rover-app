import Image from 'next/image';
import { useState } from 'react';
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip';

const RoverImage = ({ imgSrc, camera, date }) => {
  const [isValidImage, setIsValidImage] = useState(true);

  const handleImageError = () => {
    console.log('Image failed to load:', imgSrc); // Add log to check image error
    setIsValidImage(false);
  };

  return (
    <Card className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center">
      <CardHeader>
        <TooltipProvider>
          <Tooltip>
            <TooltipContent>
              <p>{camera}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardHeader>
      <CardContent className="flex justify-center items-center">
        {isValidImage ? (
          <div className="relative w-full h-0 pb-[100%]"> {/* Maintain aspect ratio */}
            <Image
              src={imgSrc}
              alt={`${camera} - ${date}`}
              layout="responsive"
              width={400}
              height={300}
              className="rounded-md mb-4"
              onError={handleImageError}
            />
          </div>
        ) : (
          <div className="flex items-center justify-center h-96 w-96 bg-gray-200 rounded-md">
            <p className="text-gray-500">Image not available</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-col items-center">
        <p className="text-center text-gray-500">{date}</p>
      </CardFooter>
    </Card>
  );
};

export default RoverImage;
