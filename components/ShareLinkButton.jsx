'use client';

import { useState } from 'react';

function ShareLinkButton() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setClicked(true);
    setTimeout(() => setClicked(false), 1500);
  };

  console.log('[ShareLinkButton] clicked', clicked);
  return (
    <button
      onClick={handleClick}
      className="rounded border px-2 py-1 text-sm text-slate-500 hover:bg-orange-100 hover:text-slate-700"
    >
      {clicked ? 'Link copied!' : 'Share Link'}
    </button>
  );
}

export default ShareLinkButton;
