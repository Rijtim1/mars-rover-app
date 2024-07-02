import Header from './components/Header';

export const metadata = {
  title: 'Mars Rover Photos',
  description: 'Browse photos from NASA\'s Mars rovers.',
};

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <h1>Welcome to Mars Rover Photos</h1>
        <p>Select a rover to start exploring photos.</p>
      </main>
    </div>
  );
}
