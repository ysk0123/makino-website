export default function Posts({ posts }) {
  console.log((posts)

  return (
    <div className={styles.gridContainer}>
      {posts
        .filter((post) => post.slug)
        .map(({ title, slug, publishDate }) => (
          <article className={styles.post} key={slug}>
            <Link href={`/blog/${slug}`}>
              <span className={styles.publishDate}>
                {publishDate ? publishDate.slice(0, 10) : ""}
              </span>
              <h2 className={`${notoSansJP.className} ${manrope.className} ${styles.title}`}>
                {title}
              </h2>
            </Link>
          </article>
        ))}
    </div>
  )
}