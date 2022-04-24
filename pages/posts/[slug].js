import { getPostBySlug, getPostSlug } from '@lib/graphcms';
import Layout from '@components/Layout';
import PostLayout from '@components/PostLayout';

export default function Post({ post }) {
  return (
    <Layout>
      <PostLayout post={post} />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getPostSlug();

  return {
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}
