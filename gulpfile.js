var gulp = require("gulp"),
    nodemon = require("gulp-nodemon");


gulp.task('serve', function () {
    nodemon({
        script: 'server.js',
        ext: '.js',
        env: {
            PORT: 3000
        },
        ignore: ['./node_modules/**', './tests/**']
    })
        .on('restart', function () {
            console.log("Restarted node server");
        });
});

//// Tasks
//gulp.task('watch', ['scripts'], function () {
//    gulp.watch('./app/**/*.js', ['scripts']);
//});