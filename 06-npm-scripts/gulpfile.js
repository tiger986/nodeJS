const gulp = require('gulp')
const server = require('gulp-webserver')

gulp.task('server', () => {
    return gulp.src('./dev').pipe(server({
        host: 'localhost',
        port: 8000
    }))
})

gulp.task('default', ['server'], () => {
    console.log('done')
})