import { series, parallel } from 'gulp';
import clean from './gulp/tasks/clean';
import server from './gulp/tasks/server';
import scripts from './gulp/tasks/scripts';
import config from './gulp/config';
import { pugBuild, pugWatch } from './gulp/tasks/pug';
import { sassBuild, sassWatch } from './gulp/tasks/styles';
import { assetsBuild, assetsWatch } from './gulp/tasks/assets';
import { imagesBuild, imagesWatch } from './gulp/tasks/images';

config.setEnv();

export const build = series(
  clean,
  parallel(scripts, pugBuild, sassBuild, assetsBuild, imagesBuild),
);

export const watch = series(
  build,
  server,
  parallel(pugWatch, sassWatch, assetsWatch, imagesWatch),
);
