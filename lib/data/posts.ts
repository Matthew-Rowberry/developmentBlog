import fs from "fs";
import path from "path";

export const getAllPosts = () => {
  return fs.readdirSync(path.resolve(process.cwd(), "posts")).map((file) => {
    return file.replace(".mdx", "");
  });
};

export const getPostsBySlug = (slug: string) => {
  return fs
    .readFileSync(path.resolve(process.cwd(), "posts", slug + ".mdx"))
    .toString();
};
