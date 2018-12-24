const path = require('path');
const resolve = path.resolve,
  join = path.join;

const glob = require('glob');

const webpack = require('webpack');
const cfg = require('dotenv').config();

const rootDir = resolve(__dirname);
const srcDir = join(rootDir, 'src');
const modulesDir = join(rootDir, 'node_modules');
const buildDir = join(rootDir, 'docs');
const dataDir = join(rootDir, 'fixtures');

module.exports = {
  rootDir: srcDir,
  components: function () {
    return glob.sync(`${srcDir}/components/**/*.js`).filter((module) => {
      const isSpec = /\.spec\.js$/.test(module);
      const isUtil = /\.util\/(.*)\.js$/.test(module) ||
        /util\/(.*)\.js$/.test(module);
      const isStep = /\/steps\/(.*)\.js$/.test(module);
      const isData = /data\.js$/.test(module);
      const keep = !isSpec && !isUtil && !isData && !isStep;
      return keep;
    });
  },
  // skipComponentsWithoutExample: true,
  styleguideDir: buildDir,
  title: 'Fullstack.io React component cookbook',
  updateWebpackConfig: function (webpackConfig, env) {
    webpackConfig.module.loaders.push(
      {
        test: /\.jsx?$/,
        include: srcDir,
        loader: 'babel',
        query: {
          presets: [ 'es2015', 'stage-0', 'react' ],
        },
      },
      // [name]___[local]___[hash:base64:5]
      {
        test: /\.css$/,
        include: srcDir,
        exclude: modulesDir,
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss-loader',
      },
      {
        test: /\.css$/,
        include: join(modulesDir, 'jquery-ui'),
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        include: [ srcDir, modulesDir ],
        loader: 'file',
      },
      {
        test: /\.json$/,
        include: dataDir,
        loader: 'json',
      },
      {
        test: /\.css$/,
        include: join(modulesDir, 'font-awesome', 'css'),
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        include: join(modulesDir, 'font-awesome', 'fonts'),
        loader: 'url-loader',
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        include: join(modulesDir, 'font-awesome', 'fonts'),
        loader: 'file-loader',
      },
      {
        test: /jquery[\\\/]src[\\\/]selector\.js$/,
        include: [ srcDir, modulesDir ],
        loader: 'amd-define-factory-patcher-loader',
      }
    );

    webpackConfig.resolve.alias = {
      'jquery': join(modulesDir, 'jquery/src/jquery'),
      'jquery-ui': join(modulesDir, 'jquery-ui'),
      'jqueryui': join(modulesDir, 'jquery-ui'),
      'React': join(modulesDir, 'react'),
      'react': join(modulesDir, 'react'),
      'util': join(srcDir, 'components', 'util'),
      'fixtures': dataDir,
    };

    webpackConfig.postcss = [ require('postcss-nested'), require('precss')({}) ];

    webpackConfig.plugins.push(
      new webpack.DefinePlugin({
        __WEATHER_API_KEY__: JSON.stringify(cfg.WEATHER_API_KEY),
        __NYT_API_KEY__: JSON.stringify(cfg.NYT_API_KEY),
        __GOOGLE_API_KEY__: JSON.stringify(cfg.GOOGLE_API_KEY),
      })
    );

    return webpackConfig;
  },
};
