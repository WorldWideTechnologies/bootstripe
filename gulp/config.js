var config = {
    // Source Config
    src_images:       './src/images/',                       // Source Images Directory
    src_javascripts:  './src/javascript/',                   // Source Javascripts Directory
    src_stylesheets:  './src/sass/',                         // Source Styles Sheets Directory
    // Vendors
    vend_main_css:    'vendor.css',
    vend_main_js:     'vendor.js',
    vend_main_cdn_js: 'vendor-cdn.js',
    // Destination Config
    dist_fonts:       './public/fonts/',                            // Destination Fonts Directory
    dist_images:      './public/images/',                           // Destination Images Directory
    dist_javascripts: './public/javascript/',                       // Destination Javascripts Directory
    dist_stylesheets: './public/css/',                              // Destination Styles Sheets Directory
    // Bower Config
    bower:            './bower_components/',                 // Bower Components
    // Auto Prefixer
    autoprefix:       'last 3 version',                      // Number of version Auto Prefixer to use
    // Server
    host:             'demo.dev',                           // Webserverhost
    port:             80,                                   // Webserver port
    // Environment
    environment:      'dev'
};

var files = {
    src_fonts:        [
        './src/fonts/**/*',
        config.bower + '/font-awesome/fonts/**/*',
        config.bower + '/open-iconic/font/fonts/**/*',
        config.bower + '/lightgallery/dist/fonts/**/*'
    ],
    vend_stylesheets: [
        config.bower + '/Avail/dist/stylesheets/avail.css',
        config.bower + '/lightgallery/dist/css/lightgallery.css',
        config.bower + '/lightgallery/dist/css/lg-transitions.css',
        config.bower + '/font-awesome/css/font-awesome.css'
    ],
    vend_javascripts: {
        jquery:       config.bower + '/jquery/dist/jquery.js',
        foundation:   config.bower + '/foundation-sites/dist/foundation.js',
        lightgallery: config.bower + '/lightgallery/dist/js/lightgallery-all.js',
        gmaps:        config.bower + '/gmaps/gmaps.js'
    }
};

var clean_paths = [config.dist_fonts, config.dist_images, config.dist_javascripts, config.dist_stylesheets];

config.files       = files;
config.clean_paths = clean_paths;

module.exports = config;
