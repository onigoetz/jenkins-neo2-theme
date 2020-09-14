module.exports = {
    presets: [
        "@swissquote/crafty-preset-postcss",
        "@swissquote/crafty-runner-gulp"
    ],
    legacy_css: true,
    css: {
        "neo-light": {
            source: "css/style.scss",
            watch: ["css/**"]
        }
    },
    postcss(crafty, config) {
        config.processor("postcss-inline-svg")
            .before("autoprefixer")
            .setOptions({
                path: __dirname + "/images"
            });

        const customProperties = config.processor("postcss-custom-properties")
            .options;
          customProperties.variables = {
            preserve: true
          };
    }
}