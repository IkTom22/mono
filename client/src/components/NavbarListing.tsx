import Link from 'next/link';
import Image from 'next/image';
import AkinaLogo from '../../public/images/AkinaLogo.svg';

export default function NavListing() {
  return (
    <nav className="w-full flex justify-center h-24">
      <div className="w-desktop flex justify-between bg-pink items-center ">
        <div className="flex gap-8 items-center">
          <Link href="/">
            <Image src={AkinaLogo} width={120} height={50} alt="akina logo" />
          </Link>
          <div>
            <input type="search" placeholder="Search the Impact Directory" />
          </div>
        </div>

        <div className="flex items-center gap-4 text-lg">
          <ul className="flex gap-4">
            <li>Saved</li>
            <li>Settings</li>
          </ul>
          <Link
            href="/login"
            className="border-2 border-main-blue text-main-blue p-2 px-4 hover:underline"
          >
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
}
