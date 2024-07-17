/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'mars.jpl.nasa.gov',
          pathname: '/**',
        },
        {
          protocol: 'http',
          hostname: 'mars.jpl.nasa.gov',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'mars.nasa.gov',
          pathname: '/**',
        },
        {
          protocol: 'http',
          hostname: 'mars.nasa.gov',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'apod.nasa.gov',
          pathname: '/**',
        },
        {
          protocol: 'http',
          hostname: 'apod.nasa.gov',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: '**',
          pathname: '/**',
        },
        {
          protocol: 'http',
          hostname: '**',
          pathname: '/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  