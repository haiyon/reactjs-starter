const env = process.env.NODE_ENV || 'development';

interface Host {
  URL: string;
  PORT?: string;
  PATH?: string;
}

const HOST = {
  production: {
    URL: 'https://api.domain.com',
    PORT: '',
    PATH: ''
  },
  test: {
    URL: ''
  },
  development: {
    URL: 'https://dev.api.domain.com',
    PORT: '',
    PATH: ''
  }
}[env] as Host;

const URL = HOST.PORT ? `${HOST.URL}:${HOST.PORT}${HOST.PATH}` : HOST.URL + HOST.PATH;

interface UrlHandleParams {
  obj: any;
  url: string;
}

/**
 * URL Handle
 * @param {Object} obj API Maps
 * @param {String} url API URL
 */

const urlHandle = ({ obj, url }: UrlHandleParams): any => {
  const tmp = Object.keys(obj);
  if (tmp && tmp.length <= 0) return;
  tmp.forEach(val => {
    if (typeof obj[val] === 'object') {
      return urlHandle({ obj: obj[val], url });
    }
    if (obj[val].indexOf(url) > -1) {
      return obj[val];
    }
    return (obj[val] = url + obj[val]);
  });
  return obj || {};
};
// FIXED URL
const FIXED_PARAM = {
  host: URL,
  storage: URL
};
// API Maps
const API_MAPS = {
  simple: '/simple' // after: https://api.domain.com/simple
};

export default { ...FIXED_PARAM, ...urlHandle({ obj: API_MAPS, url: URL }) };
