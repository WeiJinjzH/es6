import yargs from 'yargs';

const args = yargs
.option('production', { // 提取参数区分环境
    boolean: true,
    default: false,
    describe: 'min all scripts',
})

.option('watch', { // 要不要自动编译
    boolean: true,
    default: false,
    describe: 'watch all files'
})

.option('verbose', { // 要不要持续输出命令行的执行日志
    boolean: true,
    default: false,
    describe: 'log',
})

.option('sourcemaps', { // 强制生成sourcemaps
    describe: 'force the creation of sourcemaps'
})

.option('port', { // 端口选项
    string: true,
    default: 8080,
    describe: 'server port',
})

.argv // 对输入的命令行以字符串的形式进行解析

