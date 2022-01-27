import gulp from 'gulp';
import config from '../config';

const fontsBuild = (done) => {
  gulp.src(`${config.src.fonts}/**/*`).pipe(gulp.dest(config.dest.fonts));

  done();
};

export const assetsBuild = gulp.parallel(fontsBuild);

export const assetsWatch = (done) => {
  gulp.watch(`${config.src.fonts}/**/*`, fontsBuild);

  done();
};
