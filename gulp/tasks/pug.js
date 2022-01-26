import gulp from 'gulp';
import pug from 'gulp-pug';
import gulpif from 'gulp-if';
import plumber from 'gulp-plumber';
import { setup as emittySetup } from '@zoxon/emitty';
import config from '../config';

const emittyPug = emittySetup(config.src.pug, 'pug', {
  makeVinylFile: true,
});

global.isPugWatch = false;
global.emittyChangedFile = {
  path: '',
  stats: null,
};

export const pugBuild = (done) => {
  gulp
    .src(`${config.src.pug}/*.pug`)
    .pipe(plumber())
    .pipe(
      gulpif(
        global.isPugWatch,
        emittyPug.stream(
          global.emittyChangedFile.path,
          global.emittyChangedFile.stats,
        ),
      ),
    )
    .pipe(pug())
    .pipe(gulp.dest(config.dest.html));

  done();
};

export const pugWatch = (done) => {
  global.watch = true;

  gulp
    .watch(`${config.src.pug}/**/*.pug`, pugBuild)
    .on('all', (event, filePath, stats) => {
      global.emittyChangedFile = {
        path: filePath,
        stats,
      };
    });

  done();
};
