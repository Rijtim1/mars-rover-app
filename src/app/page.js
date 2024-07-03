'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '@/app/components/Header';
import { fetchAPOD } from '@/app/utils/api';

export default function Home() {
  const [apod, setApod] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAPOD()
      .then(data => setApod(data))
      .catch(err => setError('Failed to fetch APOD.'));
  }, []);

  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to Mars Rover Photos</h1>
        <p>Select a rover to start exploring photos.</p>
        <div className="mt-8">
          {error && <p className="text-red-500">{error}</p>}
          {apod ? (
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">{apod.title}</h2>
              {apod.media_type === 'image' ? (
                <Image
                  src={apod.url}
                  alt={apod.title}
                  width={600}
                  height={400}
                  layout="responsive"
                  className="rounded-md"
                />
              ) : (
                <video
                  controls
                  className="rounded-md mx-auto"
                  width="600"
                  height="400"
                >
                  <source src={apod.url} type="video/mp4" />
                </video>
              )}
              <p className="mt-4">{apod.explanation}</p>
              {apod.copyright && (
                <p className="mt-2 text-sm text-gray-500">
                  &copy; {apod.copyright}
                </p>
              )}
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </main>
    </div>
  );
}
