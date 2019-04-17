import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';
import args from './util/args';

gulp.task('serve', (cb) => {
    if (!args.watch) { // 不是处于监听状态下
        return cb()
    }
    var server = liveserver.new(['--harmony', 'server/bin/www']); // harmony表示当前目录下 
    server.start(); // 启动服务器

    gulp.watch(['server/public/**/*.js', 'server/public/**/*.ejs'], function(file) {
        server.notify.apply(server, [file]); // 热更新
    });
    gulp.watch(['server/routes/**/*.js', 'server/app.js'], function() {
        server.start.bind(server)();  // 重启
    });
})