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


function scripts() {
    return src([
            'node_modules/jquery/dist/jquery.js',
            'node_modules/flatpickr/dist/flatpickr.min.js',
            'node_modules/slick-carousel/slick/slick.js',
            'app/js/main.js'
        ])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('app/js'))
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
    ], { base: 'app' })

    .pipe(dest('dist'))
}

function watching() {
    watch(['app/scss/**/*.scss'], styles)
    watch(['app/js/main.js'], scripts)
    watch(['app/*.html']).on('change', browserSync.reload)
}

exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.images = images;
exports.cleanDist = cleanDist;
exports.build = build;

exports.series = series(cleanDist, images, build);
exports.default = parallel(styles, scripts, browsersync, watching); // чтобы все эти функции выполнялись вместе консоль не был занят только слежением или обновляением браузера