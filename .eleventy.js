import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("blog/style.css");

  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    formats: ["gif"],
    widths: ["auto"],
  });

  return {
    dir: {
      // where we search for files to parse
      input: 'blog'
    }
  }
};
