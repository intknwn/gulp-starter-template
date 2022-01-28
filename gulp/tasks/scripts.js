import gulp from 'gulp';
import plumber from 'gulp-plumber';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import browsersync from 'browser-sync';
import webpackConfig from '../../webpack.config';
import config from '../config';

export const scriptsBuild = () => {
  webpackConfig.mode = config.isProd ? 'production' : 'development';
  webpackConfig.devtool = config.isDev ? 'source-map' : false;

  return gulp
    .src(`${config.src.scripts}/main.js`)
    .pipe(plumber())
    .pipe(webpackStream(webpackConfig), webpack)
    .pipe(gulp.dest(config.dest.scripts))
    .on('end', browsersync.reload);
};

export const scriptsWatch = () =>
  gulp.watch(`${config.src.scripts}/**/*.js`, scriptsBuild);
