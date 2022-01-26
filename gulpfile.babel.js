import { series, parallel } from 'gulp';
import clean from './gulp/tasks/clean';
import server from './gulp/tasks/server';
import scripts from './gulp/tasks/scripts';
import config from './gulp/config';
import { pugBuild, pugWatch } from './gulp/tasks/pug';

config.setEnv();

export const build = series(clean, parallel(scripts, pugBuild));

export const watch = series(build, server, pugWatch);
