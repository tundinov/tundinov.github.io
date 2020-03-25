var gulp = require("gulp");
var tinypng = require("gulp-tinypng-compress");

gulp.task("tinypng", function(done) {
  gulp
    .src("img/**/*.{png,jpg,jpeg}")
    .pipe(
      tinypng({
        key: "z5qDNzPJ8fKwyCdb7y6G2PDfyWqzCjBx"
      })
    )
    .pipe(gulp.dest("images"));
  done();
});
