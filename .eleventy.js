import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import { DateTime } from "luxon";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

export default function (eleventyConfig) {
  // note: relative to root dir
  eleventyConfig.addPassthroughCopy("src/_includes");

  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    formats: ["gif"],
    widths: ["auto"],
  });

  eleventyConfig.addFilter("formatDate", (dateObj, format = "yyyy-MM-dd") => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(format);
  });

  eleventyConfig.addPlugin(syntaxHighlight);

  return {
    dir: {
      // where we search for files to parse
      input: 'src'
    }
  }
};
