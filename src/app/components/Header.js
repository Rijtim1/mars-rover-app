'use client';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex items-center">
      <nav className="w-full">
        <ul className="flex justify-between w-full">
          <li className="flex-1">
            <Link href="/" className="flex flex-col items-center space-y-1 hover:text-gray-300 justify-center">
              <Image src="/logo.png" alt="Mars Rover Photos" width={44} height={44} />
              <span style={{ fontSize: '14px' }}>Home</span>
            </Link>
          </li>
          <li className="flex-1">
            <Link href="/curiosity" className="flex flex-col items-center space-y-1 hover:text-gray-300 justify-center">
              <Image src="/curiosity-logo.png" alt="Curiosity Rover Logo" width={44} height={44} />
              <span style={{ fontSize: '14px' }}>Curiosity</span>
            </Link>
          </li>
          {/* <li className="flex-1">
            <Link href="/opportunity" className="flex flex-col items-center space-y-1 hover:text-gray-300 justify-center">
              <Image src="/opportunity-logo.png" alt="Opportunity" width={44} height={44} />
              <span style={{ fontSize: '14px' }}>Opportunity</span>
            </Link>
          </li>
          <li className="flex-1">
            <Link href="/spirit" className="flex flex-col items-center space-y-1 hover:text-gray-300 justify-center">
              <Image src="/spirit-logo.png" alt="Spirit" width={44} height={44} />
              <span style={{ fontSize: '14px' }}>Spirit</span>
            </Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
