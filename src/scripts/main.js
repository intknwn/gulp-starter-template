import 'focus-visible';
import onDocumentReady from './helpers/onDocumentReady';
import lazyImages from './modules/lazyimages';

onDocumentReady(() => {
  lazyImages();
});
