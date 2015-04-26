var PUBLIC = './public',
    dest = PUBLIC + '/dist',
    src = './app',
    mui = './node_modules/material-ui/src';

module.exports = {
    dest: dest,
    robot: {
        public: PUBLIC,
        out: PUBLIC + '/robots.txt'
    },
    view: {
        src: src + '/views/**.jade',
        dest: PUBLIC,
        watch: [
            src + '/views/**'
        ]
    },
    jsx: {
        entry: src + '/app.jsx',
        watch: [
            src + '/**/*.jsx'
        ]
    },
    less: {
        src: src + '/app.less',
        watch: [
            src + '/less/**/*.less' //,
            // mui + '/less/**'
        ],
        dest: dest
    },
    fonts: {
        src: mui + '/less/material-design-fonticons/fonts/**',
        dest: dest + '/fonts/mdfonticon'
    },
    muiFonts: {
        src: mui + '/less/material-ui-icons/fonts/**',
        dest: dest + '/fonts'
    }
};
