import Link from 'next/link'
import Image from 'next/image'
import AkinaLogo from '../../public/images/AkinaLogo.svg'

export default function Nav() {
  return (
    <nav className="w-full flex justify-center h-24">
      <div className="w-desktop flex justify-between bg-pink items-center ">
        <Link href="/" >
          <Image
            src={AkinaLogo}
            width={120}
            height={50}
            alt="akina logo"
          />
        </Link>
        <div className="flex items-center gap-4">
            <ul className="uppercase flex gap-4">
                <li >Become a buyer</li>
                <li>Get certified</li>
            </ul>
            <Link href="/login" className='border-2 border-main-blue text-main-blue p-2 px-4 hover:underline'>
                BUYER LOGIN
            </Link>
        </div>
      </div>
    </nav>
  )
}
