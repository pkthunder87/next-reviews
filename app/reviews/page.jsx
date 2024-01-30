import Link from 'next/link';
import Heading from '@/components/Heading';
import { getReviews } from '@/lib/reviews';

export default async function ReviewsPage() {
  const reviews = await getReviews();
  console.log('[ReviewsPage] reviews:', reviews);

  return (
    <>
      <Heading>Reviews</Heading>

      <ul className="flex flex-col gap-3">
        <li className="w-80 rounded border bg-white shadow hover:shadow-xl">
          <Link href="/reviews/hollow-knight">
            <img
              src="/images/hollow-knight.jpg"
              alt="Image of Hollow Knight video game"
              width="320"
              height="180"
              className=" rounded-t"
            />
            <h2 className="py-1 text-center font-orbitron font-semibold">
              Hollow Knight
            </h2>
          </Link>
        </li>

        <li className="w-80 rounded border bg-white shadow hover:shadow-xl">
          <Link href="/reviews/stardew-valley">
            <img
              src="/images/stardew-valley.jpg"
              alt="Image of Stardew Valley video game"
              width="320"
              height="180"
              className=" rounded-t"
            />
            <h2 className="py-1 text-center font-orbitron font-semibold">
              Stardew Valley
            </h2>
          </Link>
        </li>
      </ul>
    </>
  );
}
