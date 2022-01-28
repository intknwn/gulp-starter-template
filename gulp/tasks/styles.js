import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sassGlob from 'gulp-sass-glob';
import gulpSass from 'gulp-sass';
import dartSass from 'sass';
import gulpif from 'gulp-if';
import autoprefixer from 'gulp-autoprefixer';
import groupMediaQueries from 'gulp-group-css-media-queries';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';
import config from '../config';

const sass = gulpSass(dartSass);

export const sassBuild = () =>
  gulp
    .src(`${config.src.sass}/main.scss`, { sourcemaps: config.isDev })
    .pipe(plumber())
    .pipe(sassGlob())
    .pipe(
      sass({
        includePaths: ['./node_modules', './node_modules/bootstrap/scss'],
      }),
    )
    .pipe(gulpif(config.isProd, groupMediaQueries()))
    .pipe(gulpif(config.isProd, autoprefixer()))
    .pipe(gulpif(config.isProd, cleanCSS({ level: 2 })))
    .pipe(
      rename({
        suffix: '.min',
      }),
    )
    .pipe(gulp.dest(config.dest.css, { sourcemaps: config.isDev }));

export const sassWatch = () =>
  gulp.watch(`${config.src.sass}/**/*.scss`, sassBuild);
