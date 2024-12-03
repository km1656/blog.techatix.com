import Layout from '../components/Layout';
import BlogCard from '../components/BlogCard';

export default function Home() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Welcome to My Blog</h1>
          <p className="text-xl text-gray-600">
            Sharing thoughts and experiences about technology and development
          </p>
        </section>

        <section className="grid gap-8">
          <BlogCard
            title="Welcome to My Blog"
            date="January 1, 2024"
            excerpt="Welcome to my new blog! This is where I'll share my thoughts and experiences about technology, development, and more."
            slug="welcome"
          />
        </section>
      </div>
    </Layout>
  );
}