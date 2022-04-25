import { gql } from '@apollo/client';
import { getPostBySlug, getPostSlug, client } from '@lib/graphcms';
import Layout from '@components/Layout';
import PostLayout from '@components/PostLayout';

export default function Post({ post }) {
  console.log(post);
  return (
    <Layout
      meta={{
        title: post.title,
        description: post.description,
      }}
    >
      <PostLayout post={post} />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const { data } = await client.query({
    query: gql`
      query GetPostBySlug($slug: String!) {
        post(where: { slug: $slug }) {
          id
          publishedAt
          title
          content {
            raw
          }
        }
      }
    `,
    variables: { slug },
  });

  return {
    props: {
      post: data.post,
    },
  };
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query GetPostSlugs {
        posts {
          slug
        }
      }
    `,
  });

  const paths = data.posts.map(({ slug }) => ({
    params: { slug },
  }));

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}
