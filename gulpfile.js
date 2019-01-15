const gulp        = require('gulp'),
      path        = require('path'),
      plumber     = require('gulp-plumber'),
      changed     = require('gulp-changed'),
      sass        = require('gulp-sass'),
      babel       = require('gulp-babel'),
      browserify  = require('gulp-browserify'),
      sourceMap   = require('gulp-sourcemaps'),
      browserSync = require('browser-sync').create(),
      runSequence = require('run-sequence'),
      eslint      = require('gulp-eslint')

const SRC_DIR  = path.resolve(__dirname, 'src'),
      COM_DIR  = path.resolve(__dirname, 'components'),
      LIB_DIR  = path.resolve(__dirname, 'lib'),
      TEMP_DIR = path.resolve(__dirname, 'temp')

const optionsBabel = {
    presets: [
        [
            '@babel/preset-env',
            {
                modules: 'commonjs',
                targets: {
                    browsers: ['> 1%', 'last 5 versions', 'Android >= 4']
                }
            }
        ]
    ],
    plugins: [
        ['@babel/plugin-transform-runtime', { 'corejs': 2 }],
        ['@babel/plugin-proposal-class-properties', { 'loose': true }],
        ['@babel/plugin-proposal-object-rest-spread', {'useBuiltIns': true}]
    ]
}

gulp.task('script', function () {
    return gulp.src([SRC_DIR + '/index.js'])
        .pipe(plumber())
        .pipe(eslint('./.eslintrc.js'))
        .pipe(eslint.format())
        .pipe(sourceMap.init())
        .pipe(babel(optionsBabel))
        .pipe(browserify())
        .pipe(sourceMap.write())
        .pipe(gulp.dest(TEMP_DIR))

})

gulp.task('com-script', function () {
    return gulp.src([COM_DIR + '/**/*.js'])
        .pipe(changed(LIB_DIR))
        .pipe(plumber())
        .pipe(eslint('.eslintrc.js'))
        .pipe(eslint.format())
        .pipe(babel(optionsBabel))
        .pipe(gulp.dest(LIB_DIR))

})

gulp.task('com-and-script', function () {
    return runSequence('com-script', 'script')

})

gulp.task('com-scss', function () {
    return gulp.src([COM_DIR + '/index.scss'])
        .pipe(changed(TEMP_DIR))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(TEMP_DIR))

})

gulp.task('copy-scss', function () {
    return gulp.src([COM_DIR + '/**/*.scss'])
        .pipe(changed(LIB_DIR))
        .pipe(gulp.dest(LIB_DIR))

})


gulp.task('html', function () {
    return gulp.src(SRC_DIR + '/index.html')
        .pipe(changed(TEMP_DIR))
        .pipe(gulp.dest(TEMP_DIR))

})

gulp.task('js-watch', ['script'], function (done) {
    browserSync.reload()
    done()
})

gulp.task('com-watch', ['com-and-script'], function (done) {
    browserSync.reload()
    done()
})

gulp.task('html-watch', ['html'], function (done) {
    browserSync.reload()
    done()
})

gulp.task('scss-watch', ['com-scss', 'copy-scss'], function (done) {
    browserSync.reload()
    done()
})

gulp.task('default', ['html', 'com-scss', 'copy-scss'], function () {
    browserSync.init({
        port: 8088,
        server: {
            baseDir: [__dirname]
        },
        open: 'localhost:8088',
        startPath: '/temp/index.html',
        logPrefix: 's5-c'
    })
    gulp.watch(SRC_DIR + '/*.js', ['js-watch'])
    gulp.watch(COM_DIR + '/**/*.js', ['com-watch'])
    gulp.watch(SRC_DIR + '/*.html', ['html-watch'])
    gulp.watch(COM_DIR + '/**/*.scss', ['scss-watch'])
})
