import { series } from 'gulp';
import clean from './gulp/tasks/clean';
import server from './gulp/tasks/server';
import scripts from './gulp/tasks/scripts';
import config from './gulp/config';

config.setEnv();

export const build = series(
  clean,
  scripts,
);

export const watch = series(
  server,
);
