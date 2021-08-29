import reactRefresh from '@vitejs/plugin-react-refresh';
import { resolve } from 'path';
import { ConfigEnv, loadEnv, UserConfig } from 'vite';
import html from 'vite-plugin-html';

import pkg from './package.json';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();

  const isProd = mode === 'production';

  const { VITE_PORT, VITE_APP_TITLE } = loadEnv(mode, root);

  return {
    define: {
      _APP_VERSION: JSON.stringify(pkg.version)
    },
    plugins: [
      reactRefresh(),
      html({
        minify: isProd,
        inject: {
          injectData: {
            title: VITE_APP_TITLE
          }
        }
      })
    ],
    resolve: {
      alias: [
        // @/xxxx => src/xxxx
        {
          find: /@\//,
          replacement: pathResolve('./src') + '/'
        }
      ]
    },
    server: {
      port: +VITE_PORT
    }
  };
};
