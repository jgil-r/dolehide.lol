import { gql } from '@apollo/client';
import Layout from '@components/Layout';
import PostList from '@components/PostList';
import { client } from '@lib/graphcms';

export default function Home({ posts }) {
  return (
    <Layout
      meta={{
        title: 'Home',
        description: 'Personal blog by Daniel Dolehide.',
      }}
    >
      <section>
        <h2>Posts</h2>
        <PostList posts={posts} />
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query GetPosts {
        posts {
          id
          slug
          publishedAt
          title
          description
        }
      }
    `,
  });

  return {
    props: {
      posts: data.posts,
    },
  };
}
