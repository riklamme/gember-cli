const path = require('path');
const base = path.resolve('./');
const config = {};

/**
 * General information
 * @type {{name: string, description: string, key: string}}
 */
config.info = {
    name: "Strikt Development",
    description: "Strikt Development Gember",
    key: "strikt"
};

/**
 * Declare directory object
 * @type {{root, gember: string, data: string, gfx: string, scripts: string, svg: string, sources: string, templates: string}}
 */
config.dir = {
    root: base,
    gember: `${base}/gember`,
    dest: `${base}/build`,
    data: `${base}/sources/data`,
    gfx: `${base}/sources/gfx`,
    node: `${base}/node_modules`,
    scripts: `${base}/sources/scripts`,
    styles: `${base}/sources/styles`,
    svg: `${base}/sources/svg`,
    sources: `${base}/sources`,
    templates: `${base}/sources/templates`,
    build: {
        gfx: 'build/resources/gfx',
        images: 'build/resources/images',
        resources: 'build/resources',
        scripts: 'build/resources/scripts',
        styles: 'build/resources/styles'
    }
};

config.sources = {
    base: `${base}/sources`,
    data: `${base}/sources/data`,
    gfx: `${base}/sources/gfx`,
    dummy: `${base}/sources/images`,
    scripts: `${base}/sources/scripts`,
    scripts_lib: `${base}/sources/scripts/lib`,
    scripts_modules: `${base}/sources/scripts/modules`,
    scripts_footer: `${base}/sources/scripts/footer`,
    styles: `${base}/sources/styles`,
    styles_base: `${base}/sources/styles/base`,
    styles_extends: `${base}/sources/styles/extends`,
    styles_functions: `${base}/sources/styles/functions`,
    styles_mixins: `${base}/sources/styles/mixins`,
    styles_modules: `${base}/sources/styles/modules`,
    styles_settings: `${base}/sources/styles/settings`,
    svg: `${base}/sources/svg`,
    templates: `${base}/sources/templates`,
    templates_filters: `${base}/sources/templates/filters`,
    templates_layouts: `${base}/sources/templates/layouts`,
    templates_partials: `${base}/sources/templates/partials`,
};

config.build = {
    base: `${base}/build`,
    resources: `${base}/build/resources/`,
    gfx: `${base}/build/resources/gfx`,
    dummy: `${base}/build/resources/images`,
    scripts: `${base}/build/resources/scripts`,
    styles: `${base}/build/resources/styles`
};

/**
 * Declare path object
 * @type {{src: string, dest: string, node_modules: string, gfx: string, resources: string, scripts: string, styles: string, sources: string}}
 */
config.path = {
    src: 'sources',
    dest: 'build',
    node_modules: 'node_modules',
    gfx: '/resources/gfx',
    resources: '/resources',
    scripts: 'resources/scripts',
    styles: 'resources/styles',
    sources: '../sources'
};

/**
 * Declare template object
 * @used ./gember/templates.js
 * @type {{data: [*]}}
 */
config.templates = {
    data: {
        news: `${config.dir.data}/news.json`
    }
};

config.scripts = {
    bundles: {
        lib: `${config.dir.node}/jquery/dist/jquery.min.js \
              ${config.dir.node}/lodash/lodash.min.js \
              ${config.dir.node}/svg4everybody/dist/svg4everybody.js \
              ${config.dir.scripts}/lib/**`
    }
};

config.server = {
    ext_key: 'eenvandaag_resources'
};

module.exports = config;
