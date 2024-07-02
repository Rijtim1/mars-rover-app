'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Header from '../components/Header';
import QueryForm from '../components/QueryForm';
import ImageGrid from '../components/ImageGrid';
import Manifest from '../components/Manifest';
import { fetchRoverPhotos, fetchRoverManifest } from '../utils/api';

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
          <h1 className="text-3xl font-bold">{rover} Rover Photos</h1>
        </div>
        <QueryForm onSubmit={handleQuery} />
        {manifest && <Manifest manifest={manifest} />}
        {error && <p className="text-red-500">{error}</p>}
        {photos.length > 0 && <ImageGrid photos={photos} />}
      </main>
    </div>
  );
};

export default RoverPage;
