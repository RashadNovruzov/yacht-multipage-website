const { src, dest, watch, parallel, series } = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify-es').default;
const autoPrefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const clean = require('gulp-clean');
const gulpClean = require('gulp-clean');

function browsersync() {
    browserSync.init({
        server: {
            baseDir: 'app/'
        }
    });
}

function cleanDist() {
    return src('dist', { read: false })
        .pipe(clean())
}

function images() {
    return src('app/images/**/*')
        .pipe(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.mozjpeg({ quality: 75, progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 }),
            imagemin.svgo({
                plugins: [
                    { removeViewBox: true },
                    { cleanupIDs: false }
                ]
            })
        ]))
        .pipe(dest('dist/images'))
}

function yachts_images() {
    return src('app/yachts/images/**/*')
        .pipe(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.mozjpeg({ quality: 75, progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 }),
            imagemin.svgo({
                plugins: [
                    { removeViewBox: true },
                    { cleanupIDs: false }
                ]
            })
        ]))
        .pipe(dest('dist/yachts/images'))
}

function details_images() {
    return src('app/yacht_details/images/**/*')
        .pipe(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.mozjpeg({ quality: 75, progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 }),
            imagemin.svgo({
                plugins: [
                    { removeViewBox: true },
                    { cleanupIDs: false }
                ]
            })
        ]))
        .pipe(dest('dist/yacht_details/images'))
}

function styles() {
    return src('app/scss/style.scss')
        .pipe(scss({ outputStyle: 'expanded' }))
        .pipe(concat('style.css'))
        .pipe(autoPrefixer({
            overrideBrowserslist: ['last 10 version']
        }))
        .pipe(dest('app/css'))
        .pipe(scss({ outputStyle: 'compressed' }))
        .pipe(concat('style.min.css'))
        .pipe(autoPrefixer({
            overrideBrowserslist: ['last 10 version'],
            grid: true
        }))
        .pipe(dest('app/css/'))
        .pipe(browserSync.stream())
}

function yachts_styles() {
    return src('app/yachts/scss/style.scss')
        .pipe(scss({ outputStyle: 'expanded' }))
        .pipe(concat('style.css'))
        .pipe(autoPrefixer({
            overrideBrowserslist: ['last 10 version']
        }))
        .pipe(dest('app/yachts/css'))
        .pipe(scss({ outputStyle: 'compressed' }))
        .pipe(concat('style.min.css'))
        .pipe(autoPrefixer({
            overrideBrowserslist: ['last 10 version'],
            grid: true
        }))
        .pipe(dest('app/yachts/css/'))
        .pipe(browserSync.stream())
}

function details_styles() {
    return src('app/yacht_details/scss/style.scss')
        .pipe(scss({ outputStyle: 'expanded' }))
        .pipe(concat('style.css'))
        .pipe(autoPrefixer({
            overrideBrowserslist: ['last 10 version']
        }))
        .pipe(dest('app/yacht_details/css'))
        .pipe(scss({ outputStyle: 'compressed' }))
        .pipe(concat('style.min.css'))
        .pipe(autoPrefixer({
            overrideBrowserslist: ['last 10 version'],
            grid: true
        }))
        .pipe(dest('app/yacht_details/css/'))
        .pipe(browserSync.stream())
}


function scripts() {
    return src([
            'node_modules/jquery/dist/jquery.js',
            'node_modules/flatpickr/dist/flatpickr.min.js',
            'node_modules/slick-carousel/slick/slick.min.js',
            'app/js/main.js'
        ])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('app/js'))
        .pipe(browserSync.stream())
}

function yachts_scripts() {
    return src([
            'node_modules/jquery/dist/jquery.js',
            'node_modules/flatpickr/dist/flatpickr.min.js',
            'node_modules/nouislider/dist/nouislider.min.js',
            'app/yachts/js/main.js',
        ])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('app/yachts/js'))
        .pipe(browserSync.stream())
}

function details_scripts() {
    return src([
            'node_modules/jquery/dist/jquery.js',
            'node_modules/flatpickr/dist/flatpickr.min.js',
            'node_modules/slick-carousel/slick/slick.min.js',
            'app/yacht_details/js/main.js',
        ])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('app/yacht_details/js'))
        .pipe(browserSync.stream())
}

function build() {
    return src([
        'app/css/flatpickr.min.css',
        'app/css/style.css',
        'app/css/style.min.css',
        'app/fonts/**/*',
        'app/js/main.min.js',
        'app/*.html',
        'app/yachts/css/style.css',
        'app/yachts/js/main.min.js',
        'app/yachts/*.html',
        'app/yachts/css/style.min.css',

        'app/yacht_details/css/style.css',
        'app/yacht_details/js/main.min.js',
        'app/yacht_details/*.html',
        'app/yacht_details/css/style.min.css'
    ], { base: 'app' })

    .pipe(dest('dist'))
}

function watching() {
    watch(['app/scss/**/*.scss'], styles)
    watch(['app/scss/**/*.scss'], yachts_styles)
    watch(['app/yachts/scss/**/*.scss'], yachts_styles)
    watch(['app/scss/**/*.scss'], details_styles)
    watch(['app/yacht_details/scss/**/*.scss'], details_styles)
    watch(['app/js/main.js'], scripts)
    watch(['app/yachts/js/main.js'], yachts_scripts)
    watch(['app/yacht_details/js/main.js'], details_scripts)
    watch(['app/*.html']).on('change', browserSync.reload)
    watch(['app/yachts/*.html']).on('change', browserSync.reload)
    watch(['app/yacht_details/*.html']).on('change', browserSync.reload)
}

exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.images = images;
exports.cleanDist = cleanDist;
exports.build = build;

// Yachts
exports.yachts_styles = yachts_styles;
exports.yachts_scripts = yachts_scripts;
exports.yachts_images = yachts_images;
//////////////////////////////////
exports.details_styles = details_styles;
exports.details_scripts = details_scripts;
exports.details_images = details_images;

exports.series = series(cleanDist, images,yachts_images,details_images, build);
exports.default = parallel(details_scripts,details_styles,yachts_styles,yachts_scripts,styles, scripts, browsersync, watching); // чтобы все эти функции выполнялись вместе консоль не был занят только слежением или обновляением браузера