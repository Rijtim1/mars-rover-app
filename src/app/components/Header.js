'use client';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex items-center">
      <nav className="w-full">
        <ul className="flex justify-between w-full">
          <li className="flex-1">
            <Link href="/" className="flex items-center space-x-2 hover:text-gray-300 justify-center">
              <Image src="/logo.png" alt="Mars Rover Photos" width={30} height={30} />
              <span>Home</span>
            </Link>
          </li>
          <li className="flex-1">
            <Link href="/curiosity" className="flex items-center space-x-2 hover:text-gray-300 justify-center">
              <Image src="/curiosity-logo.png" alt="Curiosity" width={30} height={30} />
              <span>Curiosity</span>
            </Link>
          </li>
          <li className="flex-1">
            <Link href="/opportunity" className="flex items-center space-x-2 hover:text-gray-300 justify-center">
              <Image src="/opportunity-logo.png" alt="Opportunity" width={30} height={30} />
              <span>Opportunity</span>
            </Link>
          </li>
          <li className="flex-1">
            <Link href="/spirit" className="flex items-center space-x-2 hover:text-gray-300 justify-center">
              <Image src="/spirit-logo.png" alt="Spirit" width={30} height={30} />
              <span>Spirit</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
