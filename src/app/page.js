'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '@/app/components/Header';
import { fetchAPOD } from '@/app/utils/api';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const [apod, setApod] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAPOD()
      .then(data => setApod(data))
      .catch(err => setError('Failed to fetch APOD.'));
  }, []);

  if (!apod && !error) {
    return <div className="flex justify-center items-center h-screen"><h1>Loading...</h1></div>;
  }

  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to Mars Rover Photos</h1>
        <p>Select a rover to start exploring photos.</p>
        <div className="mt-8">
          {error && <p className="text-red-500">{error}</p>}
          {apod && (
            <Card className="mx-auto max-w-lg">
              <CardHeader>
                <CardTitle>{apod.title}</CardTitle>
                <CardDescription>{apod.date}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                {apod.media_type === 'image' ? (
                  <div className="relative mx-auto" style={{ width: 'auto', height: 'auto' }}>
                    <Image
                      src={apod.url}
                      alt={apod.title}
                      layout="intrinsic"
                      width={400}
                      height={400}
                      className="rounded-md"
                    />
                  </div>
                ) : (
                  <div className="relative mx-auto" style={{ width: '100%', height: 'auto' }}>
                    <iframe
                      width="100%"
                      height="400"
                      src={`${apod.url}?autoplay=1&mute=1`}
                      title={apod.title}
                      allow="autoplay"
                      className="rounded-md"
                    ></iframe>
                  </div>
                )}
                <p className="mt-4">{apod.explanation}</p>
              </CardContent>
              {apod.copyright && (
                <CardFooter className="text-sm text-gray-500">
                  &copy; {apod.copyright}
                </CardFooter>
              )}
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}
