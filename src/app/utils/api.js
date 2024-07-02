'use client';

const API_KEY = process.env.NEXT_PUBLIC_NASA_API_KEY;
const BASE_URL = 'https://api.nasa.gov/mars-photos/api/v1';

export const fetchRoverPhotos = async (rover, sol, earthDate, camera) => {
  const params = new URLSearchParams({
    api_key: API_KEY,
    sol: sol || '',
    earth_date: earthDate || '',
    camera: camera || '',
  });

  const res = await fetch(`${BASE_URL}/rovers/${rover}/photos?${params}`);
  if (!res.ok) {
    throw new Error('Failed to fetch rover photos.');
  }
  return res.json();
};

export const fetchRoverManifest = async (rover) => {
  const res = await fetch(`${BASE_URL}/manifests/${rover}?api_key=${API_KEY}`);
  if (!res.ok) {
    throw new Error('Failed to fetch rover manifest.');
  }
  return res.json();
};
