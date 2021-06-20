import reactRefresh from '@vitejs/plugin-react-refresh';
import { resolve } from 'path';
import { ConfigEnv, loadEnv, UserConfig } from 'vite';

import pkg from './package.json';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();

  const { VITE_PORT } = loadEnv(mode, root);

  return {
    define: {
      _APP_VERSION: JSON.stringify(pkg.version)
    },
    plugins: [reactRefresh()],
    resolve: {
      alias: [
        // @/xxxx => src/xxxx
        {
          find: /@\//,
          replacement: pathResolve('src') + '/'
        },
        // #/xxxx => types/xxxx
        {
          find: /#\//,
          replacement: pathResolve('types') + '/'
        }
      ]
    },
    server: {
      port: parseInt(VITE_PORT, 10)
    }
  };
};
