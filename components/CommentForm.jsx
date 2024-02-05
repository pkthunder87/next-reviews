'use client';

import { createCommentAction } from '@/app/reviews/[slug]/actions';

export default function CommentForm({ slug, title }) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const result = await createCommentAction(formData);
    console.log('result:', result);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-3 flex flex-col gap-2 rounded border bg-white px-3 py-3"
    >
      <p className="pb-1">
        Already played <strong>{title}</strong>? Have your say!
      </p>
      <input type="hidden" name="slug" value={slug} />
      <div className="flex">
        <label htmlFor="userField" className="w-32 shrink-0">
          Your name
        </label>
        <input
          id="userField"
          name="user"
          required
          maxLength={50}
          className="w-48 rounded border px-2 py-1"
        />
      </div>
      <div className="flex">
        <label htmlFor="messageField" className="w-32 shrink-0">
          Your comment
        </label>
        <textarea
          id="messageField"
          name="message"
          required
          maxLength={500}
          className="w-full rounded border px-2 py-1"
        />
      </div>
      <button
        type="submit"
        className="w-32 self-center rounded bg-orange-800 px-2
                     py-1 text-slate-50 hover:bg-orange-700"
      >
        Submit
      </button>
    </form>
  );
}
