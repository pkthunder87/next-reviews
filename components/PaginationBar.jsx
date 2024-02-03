import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

export default function PaginationBar({ href, page, pageCount }) {
  return (
    <div className="flex items-center gap-2 pb-3">
      <PaginationLink href={`${href}?page=${page - 1}`} enabled={page > 1}>
        <ChevronLeftIcon className="h-5 w-5" />
        <span className="sr-only">Previous Page</span>
      </PaginationLink>
      <span>
        Page {page} of {pageCount}
      </span>
      <PaginationLink
        href={`${href}?page=${page + 1}`}
        enabled={page < pageCount}
      >
        <ChevronRightIcon className="h-5 w-5" />
        <span className="sr-only">Next Page</span>
      </PaginationLink>
    </div>
  );
}

function PaginationLink({ children, enabled, href }) {
  if (!enabled) {
    return (
      <span className="cursor-not-allowed rounded border text-sm text-slate-300">
        {children}
      </span>
    );
  }
  return (
    <Link
      href={href}
      className="rounded border text-sm text-slate-500
                   hover:bg-orange-100 hover:text-slate-700"
    >
      {children}
    </Link>
  );
}
