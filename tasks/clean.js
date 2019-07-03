import gulp from 'gulp';
import del from 'del';
import args from './util/args';

gulp.task('clean', () => {
    return del(['server/public', 'server/views']); // 每次改动都清除一遍public和views里面的内容再重新生成
})
