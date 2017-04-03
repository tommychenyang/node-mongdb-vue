/**
 * Created by chenya3 on 3/30/2017.
 */
var gulp = require('gulp');
var inject = require('gulp-inject');
var injectOptions={
    addPrefix:'lib',
    addRootSlash:false
}
gulp.task('inject', function () {
    var target = gulp.src('./index.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    var sources = gulp.src([
                            'node_modules/vue/dist/vue.min.js',
                            'node_modules/vue-router/dist/vue-router.min.js',
                            'node_modules/vue-resource/dist/vue-resource.js',
                            'Client/src/**/*.js']);

    return target.pipe(inject(sources,injectOptions))
        .pipe(gulp.dest('./'));
});