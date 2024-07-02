import "./globals.css";

export const metadata = {
  title: 'Mars Rover Photos',
  description: 'Browse photos from NASA\'s Mars rovers.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
