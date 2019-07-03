import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('pages', () => {
    return gulp.src('app/**/*.ejs') // 打开app这个目录下面的所有文件 包括嵌套的文件
    .pipe(gulp.dest('server')) // 再把所有文件原封不动的拷贝到一个地方
    .pipe(gulpif(args.watch, livereload())) // 再监听热更新
}) 