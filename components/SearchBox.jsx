'use client';
import { Combobox } from '@headlessui/react';
import { useIsClient } from '@/lib/hooks';

function SearchBox() {
  const isClient = useIsClient();

  if (!isClient) {
    return null;
  }

  return (
    <Combobox>
      <Combobox.Input placeholder="Search…" />;
    </Combobox>
  );
}

export default SearchBox;
