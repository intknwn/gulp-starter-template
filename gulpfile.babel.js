import { series } from 'gulp';
import clean from './gulp/tasks/clean';
import server from './gulp/tasks/server';
import config from './gulp/config';

config.setEnv();

export const build = series(
  clean,
);

export const watch = series(
  server,
);
