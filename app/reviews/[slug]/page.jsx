import Image from 'next/image';
import Heading from '@/components/Heading';
import ShareLinkButton from '@/components/ShareLinkButton';
import { getReview, getSlugs } from '@/lib/reviews';

export async function generateStaticParams() {
  const slugs = await getSlugs();
  // console.log('[ReviewPage] generateStaticParams:', slugs);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { slug } }) {
  const review = await getReview(slug);
  return {
    title: review.title,
  };
}

export default async function ReviewPage({ params: { slug } }) {
  const review = await getReview(slug);
  // console.log('[ReviewPage] review:', review);

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
    </>
  );
}
