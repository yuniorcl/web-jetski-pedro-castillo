module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/config.js");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/sitemap.xml");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/.htaccess");

  eleventyConfig.addFilter("getLocation", function(locations, slug) {
    return locations.find(loc => loc.slug === slug);
  });

  eleventyConfig.addFilter("urlencode", function(str) {
    return encodeURIComponent(str);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};
