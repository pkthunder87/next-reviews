import Link from 'next/link';
import Heading from '@/components/Heading';
import { getReviews } from '@/lib/reviews';

export const metadata = {
  title: 'Reviews',
};

export default async function ReviewsPage() {
  const reviews = await getReviews();
  console.log('[ReviewsPage] reviews:', reviews);

  return (
    <>
      <Heading>Reviews</Heading>

      <ul className="flex flex-row flex-wrap gap-3">
        {reviews.map((review) => (
          <li
            key={review.slug}
            className="w-80 rounded border bg-white shadow hover:shadow-xl"
          >
            <Link href={`/reviews/${review.slug}`}>
              <img
                src={review.image}
                alt=""
                width="320"
                height="180"
                className=" rounded-t"
              />
              <h2 className="py-1 text-center font-orbitron font-semibold">
                {review.title}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
