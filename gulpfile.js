let gulp = require("gulp")
let cleanCSS = require("gulp-clean-css")

gulp.task("build", () => {
  return gulp
    .src("src/default.css")
    .pipe(cleanCSS())
    .pipe(gulp.dest("dist"))
})

gulp.task("watch", function() {
  gulp.watch("./src/**/*.css", function(evt) {
    gulp.task("build")
  })
})
