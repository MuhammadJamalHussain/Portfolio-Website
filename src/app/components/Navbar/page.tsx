import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-green-800 text-white font-bold flex justify-around h-10">
      <Link href="/"><h1 className='justify-center text-2xl'>My
        Porfolio</h1></Link>
      <ul className="space-x-6 flex m-2">
        <li>
          <Link href="/">
            <h1 className="hover:underline hover:text-green-400 transition duration-200">Home</h1>
          </Link>
        </li>
        <li>
          <Link href="/components/about">
            <h1 className="hover:underline hover:text-green-400 transition duration-200">About</h1>
          </Link>
        </li>
        <li>
          <Link href="/components/contact">
            <h1 className="hover:underline hover:text-green-400 transition duration-200">Contact</h1>
          </Link>
        </li>
      </ul>
    </nav>
  );
}