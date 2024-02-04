import { createComment } from '@/lib/comments';
import { redirect } from 'next/navigation';

export default function CommentForm({ slug, title }) {
  async function action(formData) {
    'use server';

    const message = await createComment({
      slug,
      user: formData.get('user'),
      message: formData.get('message'),
    });
    console.log('created:', message);
    redirect(`/reviews/${slug}`);
  }

  return (
    <form
      action={action}
      className="mt-3 flex flex-col gap-2 rounded border bg-white px-3 py-3"
    >
      <p className="pb-1">
        Already played <strong>{title}</strong>? Have your say!
      </p>
      <div className="flex">
        <label htmlFor="userField" className="w-32 shrink-0">
          Your name
        </label>
        <input
          id="userField"
          name="user"
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
