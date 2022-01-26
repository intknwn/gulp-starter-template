import del from 'del';
import config from '../config';

const clean = (done) => {
  del(config.dest.root);

  done();
};

export default clean;
