const sass = require('sass');

module.exports = function (eleventyConfig) {

    eleventyConfig.addTemplateFormats("scss");
    eleventyConfig.addExtension("scss", {
        outputFileExtension: "css",
        // Disable default so this doesn't eat our css output
        getData: async () => { return {layout: ''} },
        compile: async function (content) {
            const result = sass.compileString(content);
            return async () => result.css;
        }
    });

    eleventyConfig.addPassthroughCopy({ "node_modules/purecss/build/*-min.css": "pure-css/" });
    eleventyConfig.addPassthroughCopy({ "node_modules/font-awesome/css/font-awesome.min.css": "font-awesome/font-awesome.min.css" });
    eleventyConfig.addPassthroughCopy({ "node_modules/font-awesome/fonts/*": "fonts/" });
    eleventyConfig.addPassthroughCopy("src/favicon.ico");


    // Set custom directories for input, output, includes, and data
    return {
        dir: {
            input: "src",
            includes: "_includes",
            data: "_data",
            output: "_site"
        }
    };
};
