const gulp = require('gulp');
const themeKit = require('@shopify/themekit');

gulp.task('watch', function() {
  themeKit.command('watch', {
      allowLive: true,
      env: 'development'
  })
});