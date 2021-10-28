const SRC_PATH = 'src';
const DEST_PATH = 'build';

const config = {
  src: {
    root: SRC_PATH,
    sass: `${SRC_PATH}/scss`,
    js: `${SRC_PATH}/js`,
    pug: `${SRC_PATH}/pug`,
    fonts: `${SRC_PATH}/assets/fonts`,
    images: `${SRC_PATH}/assets/images`,
    icons: `${SRC_PATH}/assets/icons`,
  },
  dest: {
    root: DEST_PATH,
    html: DEST_PATH,
    css: `${DEST_PATH}/css`,
    js: `${DEST_PATH}/js`,
    images: `${DEST_PATH}/iamges`,
  },
  setEnv() {
    this.isProd = process.argv.includes('--prod');
    this.isDev = !this.isProd;
  },
};

export default config;
