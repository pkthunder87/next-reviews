import Image from 'next/image';
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';
import { notFound } from 'next/navigation';
import Heading from '@/components/Heading';
import CommentList from '@/components/CommentList';
import CommentForm from '@/components/CommentForm';
import ShareLinkButton from '@/components/ShareLinkButton';
import { getReview, getSlugs } from '@/lib/reviews';

export async function generateStaticParams() {
  const slugs = await getSlugs();
  // console.log('[ReviewPage] generateStaticParams:', slugs);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { slug } }) {
  const review = await getReview(slug);

  if (!review) {
    notFound();
  }
  return {
    title: review.title,
  };
}

export default async function ReviewPage({ params: { slug } }) {
  console.log('[ReviewPage] rendering:', slug);
  const review = await getReview(slug);
  if (!review) {
    notFound();
  }

  return (
    <>
      <Heading>{review.title}</Heading>
      <p className="pb-3 font-semibold ">{review.subtitle}</p>
      <div className="flex items-baseline gap-3">
        <p className="pb-2 italic">{review.date}</p>
        <ShareLinkButton />
      </div>
      <Image
        src={review.image}
        alt=""
        priority
        width="640"
        height="360"
        className="mb-2 rounded"
      />
      <article
        dangerouslySetInnerHTML={{ __html: review.body }}
        className="prose prose-slate max-w-screen-sm"
      />
      <section className="mt-3 max-w-screen-sm border-t border-dashed py-3">
        <h2 className="flex items-center gap-2 text-xl font-bold">
          <ChatBubbleBottomCenterTextIcon className="h-6 w-6" />
          Comments
        </h2>
        <CommentForm title={review.title} />
        <CommentList />
      </section>
    </>
  );
}
