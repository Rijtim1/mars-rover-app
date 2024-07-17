'use client';

const API_KEY = process.env.NEXT_PUBLIC_NASA_API_KEY;
const BASE_URL = 'https://api.nasa.gov/mars-photos/api/v1';
const BASE_URL_APOD = 'https://api.nasa.gov/planetary';

const constructRoverPhotosUrl = (rover, sol) => {
  let url = `${BASE_URL}/rovers/${rover}/photos?api_key=${API_KEY}`;
  if (sol) url += `&sol=${sol}`;
  return url;
};

export const fetchRoverPhotos = async (rover, sol) => {
  const url = constructRoverPhotosUrl(rover, sol);
  console.log(`Fetching rover photos from: ${url}`); // Debug log
  
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch rover photos.');
  }
  return res.json();
};

export const fetchRoverManifest = async (rover) => {
  const url = `${BASE_URL}/manifests/${rover}?api_key=${API_KEY}`;
  console.log(`Fetching rover manifest from: ${url}`); // Debug log

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch rover manifest.');
  }
  return res.json();
};

export const fetchAPOD = async () => {
  const url = `${BASE_URL_APOD}/apod?api_key=${API_KEY}`;
  console.log(`Fetching APOD from: ${url}`); // Debug log

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch APOD.');
  }

  const data = await res.json();

  if (data.media_type === 'image') {
    const image = new Image();
    image.src = data.url;
    await new Promise((resolve) => {
      image.onload = () => {
        data.width = image.naturalWidth;
        data.height = image.naturalHeight;
        resolve();
      };
    });
  }

  return data;
};
