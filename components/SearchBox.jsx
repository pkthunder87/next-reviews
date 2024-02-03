'use client';
import { Combobox } from '@headlessui/react';
import { useIsClient } from '@/lib/hooks';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const reviews = [
  { slug: 'hades-2018', title: 'Hades' },
  { slug: 'fall-guys', title: 'Fall Guys: Ultimate Knockout' },
  { slug: 'black-mesa', title: 'Black Mesa' },
  { slug: 'disco-elysium', title: 'Disco Elysium' },
  { slug: 'dead-cells', title: 'Dead Cells' },
];

function SearchBox() {
  const router = useRouter();
  const isClient = useIsClient();
  const [query, setQuery] = useState('');

  const handleChange = (review) => {
    router.push(`/reviews/${review.slug}`);
  };

  //   console.log('[SearchBox] query:', query);
  if (!isClient) {
    return null;
  }

  const filtered = reviews.filter((review) => review.title.includes(query));

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
          {filtered.map((review) => (
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
