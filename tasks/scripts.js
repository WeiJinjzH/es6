import gulp from 'gulp';
import gulpif from 'gulp-if';
import concat from 'gulp-concat';
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
import named from 'vinyl-named';
import livereload from 'gulp-livereload'; // 热更新
import plumber from 'gulp-plumber'; // 处理文件信息流 管道拼接
import rename from 'gulp-rename';
import uglify from 'gulp-uglify'; // 压缩
import { log, colors } from 'gulp-util'; // 信息输出
import args from './util/args';

gulp.task('scripts', () => { // 创建一个脚本任务 打开 重命名 webpack处理编译
    return gulp.src(['app/js/index.js'])
    .pipe(plumber({
        errorHandler: function() { // 处理错误

        }
    }))
    .pipe(named()) // 重命名
    .pipe(gulpWebpack({
        module: {
            loaders: [{
                test: /\.js$/,
                loader: 'babel',
            }]
        }
    }), null, (err, stats) => {
        log(`Finished '${colors.cyan('scripts')}'`, stats.toString({
            chunks: false
        }))
    })
    .pipe(gulp.dest('server/public/js')) // 编译之后要存放的路径
    .pipe(rename({ // 备份 重命名
        basename: 'cp',
        extname: '.min.js',
    }))
    .pipe(uglify({compress: { properties: false }, output: { 'quote_keys': true }})) // 压缩
    .pipe(gulp.dest('server/public/js')) // 压缩之后再存储 此时文件夹内有两个文件 一个是编译好的未压缩的 一个是编译好了之后压缩的
    .pipe(gulpif(args.watch, livereload())) // 监听文件的变化然后刷新 用gulpif判断然后调用方法刷新 如果命令行有watch参数就监听更新
})