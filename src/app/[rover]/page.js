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
        .then(data => setManifest(data.photo_manifest))
        .catch(err => setError('Failed to fetch rover manifest.'));
    }
  }, [rover]);

  const handleQuery = ({ sol, earthDate, camera }) => {
    setError(null);
    fetchRoverPhotos(rover, sol, earthDate, camera)
      .then(data => {
        if (data.photos.length === 0) {
          setError('No photos found for the given parameters.');
        } else {
          setPhotos(data.photos);
        }
      })
      .catch(err => setError('Failed to fetch photos.'));
  };

  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <div className="flex items-center space-x-2 mb-4">
          <Image src={`/${rover.toLowerCase()}-logo.png`} alt={`${rover} Logo`} width={40} height={40} />
          <h1 className="text-3xl font-bold">{rover.charAt(0).toUpperCase() + rover.slice(1)} Rover Photos</h1>
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
