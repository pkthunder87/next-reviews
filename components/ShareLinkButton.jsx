function ShareLinkButton() {
  const handleClick = () => {
    console.log('clicked!');
  };

  return (
    <button
      onClick={handleClick}
      className="rounded border px-2 py-1 text-sm text-slate-500 hover:bg-orange-100 hover:text-slate-700"
    >
      Share Link
    </button>
  );
}

export default ShareLinkButton;
