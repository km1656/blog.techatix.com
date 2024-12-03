export default function BlogCard({ title, date, excerpt, slug }) {
  return (
    <article className="blog-card">
      <div className="blog-card-content">
        <h2 className="text-2xl font-bold mb-2">
          <a href={`/posts/${slug}`} className="hover:text-primary-color">
            {title}
          </a>
        </h2>
        <div className="text-sm text-gray-600 mb-4">{date}</div>
        <p className="text-gray-700 mb-4">{excerpt}</p>
        <a
          href={`/posts/${slug}`}
          className="inline-block text-primary-color hover:text-secondary-color"
        >
          Read more →
        </a>
      </div>
    </article>
  );
}