;(() => {
  'use strict'

  const gulp = require('gulp')
  const cleanCSS = require('gulp-clean-css')
  const browserSync = require('browser-sync').create()

  const serverConfig = {
    server: {
      baseDir: './docs',
      index: 'index.html',
    },
    port: 8080,
    open: false,
  }

  const css = () =>
    gulp
      .src('src/black.css')
      .pipe(cleanCSS())
      .pipe(gulp.dest('dist'))
      .pipe(gulp.dest('docs'))

  const watch = done => {
    gulp.watch('./src/**/*.css', css)
    done()
  }

  const server = done => {
    browserSync.init(serverConfig)
    done()
  }

  exports.build = gulp.series(css)
  exports.default = gulp.series(css, watch, server)
})()
