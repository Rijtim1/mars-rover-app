'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Header from '@/app/components/Header';
import QueryForm from '@/app/components/QueryForm';
import ImageGrid from '@/app/components/ImageGrid';
import Manifest from '@/app/components/Manifest';
import { fetchRoverPhotos, fetchRoverManifest } from '@/app/utils/api';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const RoverPage = ({ params }) => {
  const router = useRouter();
  const { rover } = params;

  const [photos, setPhotos] = useState([]);
  const [manifest, setManifest] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (rover) {
      fetchRoverManifest(rover)
        .then(data => {
          console.log('Fetched Manifest:', data); // Debug log
          setManifest(data.photo_manifest);
        })
        .catch(err => {
          console.error('Error fetching manifest:', err); // Debug log
          setError('Failed to fetch rover manifest.');
        });
    }
  }, [rover]);

  const handleQuery = ({ sol }) => {
    setError(null);
    fetchRoverPhotos(rover, sol)
      .then(data => {
        console.log('Fetched Photos:', data); // Debug log
        if (data.photos.length === 0) {
          setError('No photos found for the given parameters.');
        } else {
          setPhotos(data.photos);
        }
      })
      .catch(err => {
        console.error('Error fetching photos:', err); // Debug log
        setError('Failed to fetch photos.');
      });
  };

  useEffect(() => {
    console.log('Photos:', photos); // Add log to check photos state
  }, [photos]);

  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <div className="flex items-center space-x-2 mb-4">
          <Image src={`/${rover.toLowerCase()}-logo.png`} alt={`${rover} Logo`} width={40} height={40} />
          <h1 className="text-3xl font-bold">{rover} Rover Photos</h1>
        </div>
        <Card className="mb-4">
          <CardHeader>
            <CardTitle>Search for Photos</CardTitle>
            <CardDescription>Use the form below to search for Mars Rover photos.</CardDescription>
          </CardHeader>
          <CardContent>
            <QueryForm onSubmit={handleQuery} />
          </CardContent>
        </Card>
        {manifest && (
          <Card className="mb-4">
            <CardHeader>
              <CardTitle>Mission Manifest</CardTitle>
            </CardHeader>
            <CardContent>
              <Manifest manifest={manifest} />
            </CardContent>
          </Card>
        )}
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {photos.length > 0 && <ImageGrid photos={photos} />}
      </main>
    </div>
  );
};

export default RoverPage;
