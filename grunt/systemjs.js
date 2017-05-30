module.exports = {
    options: {
        sfx: true,
        minify: true,
        sourceMaps: false,
        configFile: "./system.config.js",
        build: {
            mangle: false
        }
    },
    ts: {
        src: "Main.js",
        dest: ".build/js/main.min.js"
    }
};