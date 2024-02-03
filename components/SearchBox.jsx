'use client';
import { Combobox } from '@headlessui/react';
import { useIsClient } from '@/lib/hooks';

const reviews = [
  { slug: 'hades-2018', title: 'Hades' },
  { slug: 'fall-guys', title: 'Fall Guys: Ultimate Knockout' },
  { slug: 'black-mesa', title: 'Black Mesa' },
  { slug: 'disco-elysium', title: 'Disco Elysium' },
  { slug: 'dead-cells', title: 'Dead Cells' },
];

function SearchBox() {
  const isClient = useIsClient();

  //   console.log('[SearchBox] isClient:', isClient);
  if (!isClient) {
    return null;
  }

  return (
    <div className="relative w-48">
      <Combobox>
        <Combobox.Input
          placeholder="Search…"
          className="rounded border px-2 py-1"
        />
        <Combobox.Options className="absolute w-full bg-white py-1">
          {reviews.map((review) => (
            <Combobox.Option key={review.slug}>
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
