import { GraphQLClient } from 'graphql-request';

export const graphcms = new GraphQLClient(process.env.GRAPHCMS_PROJECT_API);

export async function getAllPosts() {
  const { posts } = await graphcms.request(
    `
      {
        posts(orderBy: publishedAt_DESC) {
          id,
          publishedAt,
          slug,
          title,
          description
        }
      }
    `
  );

  return posts;
}

export async function getPostBySlug(slug) {
  const { post } = await graphcms.request(
    `
      query PostPageQuery($slug: String!) {
      post(where: { slug: $slug }) {
        title,
        publishedAt,
        content {
          raw
        }
      }
    }
    `,
    {
      slug,
    }
  );

  return post;
}

export async function getPostSlug() {
  const { posts } = await graphcms.request(
    `
      {
        posts {
          slug
        }
      }
      
    `
  );

  return posts;
}
