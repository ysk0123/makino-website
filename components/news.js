import Link from "next/link";
import SectionHeader from "./SectionHeader";

export default function News({ posts = [] }) {
  return (
    <section className="py-24 px-6 md:px-12 my-24 max-w-5xl mx-auto">

      {/* セクションタイトル */}
      <SectionHeader
        title="News"
        link="/blog"
        className="mb-12 border-b pb-4"
      />
      {/* 記事一覧 */}
      <div className="space-y-6">
        {posts.slice(0, 4).map(({ title, slug, publishDate }) => (
          <div
            key={slug}
            className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 border-b pb-4 group"
          >
            {/* 日付 */}
            <p className="text-sm text-gray-400 font-en min-w-[100px]">
              {publishDate.slice(0, 10)}
            </p>

            {/* タイトル */}
            <Link
              href={`/blog/${slug}`}
              className="font-en font-light transition duration-300 group-hover:opacity-60"
            >
              {title}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}