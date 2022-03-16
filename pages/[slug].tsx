import {
  GetStaticProps,
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { ParsedUrlQuery } from "querystring";
import { getAllPosts, getPostsBySlug } from "../lib/data/posts";

const Container: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (
  props
) => {
  return null;
};

export const getStaticProps = (query: { params: { slug: string } }) => {
  const content = getPostsBySlug(query.params!.slug);
  return { props: { content } };
};

export const getStaticPaths: GetStaticPaths = () => {
  const allPosts = getAllPosts();

  const params = allPosts.map((post) => {
    return { params: { slug: post } };
  });

  return {
    paths: params,
    fallback: false,
  };
};

export default Container;
