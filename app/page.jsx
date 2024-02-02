import Image from 'next/image';
import Link from 'next/link';
import Heading from '@/components/Heading';
import { getReviews } from '@/lib/reviews';

export default async function HomePage() {
  const featuredReviews = await getReviews(3);

  // console.log('[HomePage] rendering');
  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className="pb-3">Only the best indie games, reviewed for you.</p>
      <ul className="flex flex-col gap-3">
        {featuredReviews.map((review, index) => (
          <li
            key={review.slug}
            className=" w-80 rounded border bg-white shadow hover:shadow-xl sm:w-full"
          >
            <Link
              href={`/reviews/${review.slug}`}
              className="flex flex-col sm:flex-row"
            >
              <Image
                src={review.image}
                alt=""
                priority={index === 0}
                width="320"
                height="180"
                className=" rounded-t sm:rounded-l sm:rounded-r-none"
              />
              <h2 className="py-1 text-center font-orbitron font-semibold sm:px-2">
                {review.title}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
