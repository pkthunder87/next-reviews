import Link from 'next/link';
import Heading from '@/components/Heading';

export default function HomePage() {
  console.log('[HomePage] rendering');
  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className="pb-3">Only the best indie games, reviewed for you.</p>
      <div className=" w-80 rounded border bg-white shadow hover:shadow-xl sm:w-full">
        <Link
          href="/reviews/stardew-valley"
          className="flex flex-col sm:flex-row"
        >
          <img
            src="/images/stardew-valley.jpg"
            alt="Image of Stardew Valley video game"
            width="320"
            height="180"
            className=" rounded-t sm:rounded-l sm:rounded-r-none"
          />
          <h2 className="py-1 text-center font-orbitron font-semibold sm:px-2">
            Stardew Valley
          </h2>
        </Link>
      </div>
    </>
  );
}
