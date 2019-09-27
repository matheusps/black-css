const gulp = require("gulp")
const cleanCSS = require("gulp-clean-css")

gulp.task("build", () => {
  return gulp
    .src("src/black.css")
    .pipe(cleanCSS())
    .pipe(gulp.dest("dist"))
    .pipe(gulp.dest("docs"))
})

gulp.task("watch", function() {
  gulp.watch("./src/**/*.css", function(evt) {
    gulp.task("build")
  })
})
