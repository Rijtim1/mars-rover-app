"use client";
import Link from "next/link";
import Image from "next/image";
import { NavigationMenu } from "@/components/ui/navigation-menu";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Image src="/logo.png" alt="Mars Rover Photos" width={44} height={44} />
        <NavigationMenu>
          <ul className="flex space-x-4">
            <li>
              <Link
                href="/"
                className="flex flex-col items-center space-y-1 hover:text-gray-300"
              >
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="/curiosity"
                className="flex flex-col items-center space-y-1 hover:text-gray-300"
              >
                <span>Curiosity</span>
              </Link>
            </li>
          </ul>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Header;
