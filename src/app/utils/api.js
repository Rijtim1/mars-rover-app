'use client';

const API_KEY = process.env.NEXT_PUBLIC_NASA_API_KEY;
const BASE_URL = 'https://api.nasa.gov/mars-photos/api/v1';

export const fetchRoverPhotos = async (rover, sol, earthDate, camera) => {
  let url = `${BASE_URL}/rovers/${rover}/photos?api_key=${API_KEY}`;

  if (sol) {
    url += `&sol=${sol}`;
  }
  if (earthDate) {
    url += `&earth_date=${earthDate}`;
  }
  if (camera) {
    url += `&camera=${camera}`;
  }

  console.log(url); // Debug log to see the constructed URL

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch rover photos.');
  }
  return res.json();
};

export const fetchRoverManifest = async (rover) => {
  const url = `${BASE_URL}/manifests/${rover}?api_key=${API_KEY}`;

  console.log(url); // Debug log to see the constructed URL

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch rover manifest.');
  }
  return res.json();
};

// const API_KEY = process.env.NEXT_PUBLIC_NASA_API_KEY;
const BASE_URL_APOD = 'https://api.nasa.gov/planetary';

export const fetchAPOD = async () => {
  const res = await fetch(`${BASE_URL_APOD}/apod?api_key=${API_KEY}`);
  if (!res.ok) {
    throw new Error('Failed to fetch APOD.');
  }
  const data = await res.json();

  // Fetch image dimensions if the media type is an image
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