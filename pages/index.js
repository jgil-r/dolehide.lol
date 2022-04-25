import Layout from '@components/Layout';
import PostList from '@components/PostList';
import { getAllPosts } from '@lib/graphcms';

export default function Home({ allPosts }) {
  return (
    <Layout
      meta={{
        title: 'Home',
        description: 'Personal blog by Daniel Dolehide.',
      }}
    >
      <section>
        <h2>Posts</h2>
        <PostList allPosts={allPosts} />
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPosts = await getAllPosts();

  return {
    props: {
      allPosts,
    },
  };
}
