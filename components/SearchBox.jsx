'use client';
import { Combobox } from '@headlessui/react';
import { useIsClient } from '@/lib/hooks';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { searchReviews } from '@/lib/reviews';

function SearchBox() {
  const router = useRouter();
  const isClient = useIsClient();
  const [query, setQuery] = useState('');
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    if (query.length > 1) {
      (async () => {
        const reviews = await searchReviews(query);
        setReviews(reviews);
      })();
    } else {
      setReviews([]);
    }
  }, [query]);

  const handleChange = (review) => {
    router.push(`/reviews/${review.slug}`);
  };

  //   console.log('[SearchBox] query:', query);
  if (!isClient) {
    return null;
  }

  return (
    <div className="relative w-48">
      <Combobox onChange={handleChange}>
        <Combobox.Input
          placeholder="Search…"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="rounded border px-2 py-1"
        />
        <Combobox.Options className="absolute w-full bg-white py-1">
          {reviews.map((review) => (
            <Combobox.Option key={review.slug} value={review}>
              {({ active }) => (
                <span
                  className={`block w-full truncate px-2 
              ${active ? 'bg-orange-100' : ''}`}
                >
                  {review.title}
                </span>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>
    </div>
  );
}

export default SearchBox;
