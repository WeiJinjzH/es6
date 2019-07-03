import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';

gulp.task('build', gulpSequence('clean', 'css', 'pages', 'scripts', ['browser', 'server'])); // 处理文件执行顺序