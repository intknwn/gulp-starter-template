import { series, parallel } from 'gulp';
import clean from './gulp/tasks/clean';
import server from './gulp/tasks/server';
import config from './gulp/config';
import { scriptsBuild, scriptsWatch } from './gulp/tasks/scripts';
import { pugBuild, pugWatch } from './gulp/tasks/pug';
import { sassBuild, sassWatch } from './gulp/tasks/styles';
import { assetsBuild, assetsWatch } from './gulp/tasks/assets';
import { imagesBuild, imagesWatch } from './gulp/tasks/images';
import { spritesBuild, spritesWatch } from './gulp/tasks/sprites';

config.setEnv();

export const build = series(
  clean,
  parallel(
    scriptsBuild,
    pugBuild,
    sassBuild,
    assetsBuild,
    imagesBuild,
    spritesBuild,
  ),
);

export const watch = series(
  build,
  server,
  parallel(
    scriptsWatch,
    pugWatch,
    sassWatch,
    assetsWatch,
    imagesWatch,
    spritesWatch,
  ),
);

export const sass = series(sassBuild);
