const path = require('path');
const rewireStyledComponents = require('react-app-rewire-styled-components');
const rewireImageminPlugin = require('react-app-rewire-imagemin-plugin');

const { alias } = require('react-app-rewire-alias');
const postCSS = require('react-app-rewire-postcss');

module.exports = function override(config, env) {
  if (!config.plugins) {
    config.plugins = [];
  }

  config = rewireStyledComponents(config, env);

  config = rewireImageminPlugin(config, env, {
    disable: process.env.NODE_ENV !== 'production',
    pngquant: {
      quality: '95-100'
    }
  });

  alias({
    '@/*': path.resolve(__dirname, 'src/*'),
    '@/components': path.resolve(__dirname, 'src/components'),
    '@/assets': path.resolve(__dirname, 'src/assets'),
    '@/helpers': path.resolve(__dirname, 'src/helpers'),
    '@/layouts': path.resolve(__dirname, 'src/layouts'),
    '@/locales': path.resolve(__dirname, 'src/locales'),
    '@/router': path.resolve(__dirname, 'src/router'),
    '@/theme': path.resolve(__dirname, 'src/theme'),
    '@/views': path.resolve(__dirname, 'src/views')
  })(config);

  config = postCSS(config, {
    plugins: [require('tailwindcss'), require('autoprefixer')]
  });

  return config;
};
