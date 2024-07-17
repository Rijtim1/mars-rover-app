import "./globals.css";

export const metadata = {
  title: 'Mars Rover Photos',
  description: "Browse photos from NASA's Mars rovers.",
  keywords: "NASA, Mars Rover, Photos, Curiosity, Opportunity, Spirit",
  author: "Your Name or Organization"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
