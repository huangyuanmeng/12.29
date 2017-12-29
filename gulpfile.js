var gulp = require('gulp');
var webserver = require('gulp-webserver');
var concat = require('gulp-concat');
var mincss = require('gulp-clean-css');
gulp.task('webserver',function(){
    gulp.src('.')
        .pipe(webserver({
            host:"localhost",
            port:8080,
            open:true,
            livereload:true,
            fallback:"index.html"
        }))
})
//css压缩
gulp.task('mincss',function(){
    gulp.src('./Content/css/style.css')
        .pipe(concat('newStyle.css'))
        .pipe(mincss())
        .pipe(gulp.dest("newStyle"))
})
gulp.task('default',['webserver','mincss']);