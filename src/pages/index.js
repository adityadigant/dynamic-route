import Link from 'next/link';

const HomePage = () => {
  const slugs = ['personal', 'commercial', 'dashboard'];

  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {slugs.map((slug) => (
          <li key={slug}>
            <Link href="/[slug]" as={`/${slug}`}>
              {slug}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
