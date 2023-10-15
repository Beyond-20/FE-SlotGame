const gameType = "funhouse";

//let gamename = "pandashore";
//let gamename = "fafafa";
//let gamename = "penguinsholiday";
//let gamename = "greatbluereef";
//let gamename = "truckbonanza";
//let gamename = "savannah";
//let gamename = "tropicalfiesta";
//let gamename = "elpinata";
//let gamename = "bonsairiches";
//let gamename = "juicyfruity";
//let gamename = "fomoriches"; 
//let gamename = "bountytemple";
//let gamename = "genielampofwishes";
//let gamename = "caishenfa";
//let gamename = "threedragons";
//let gamename = "racetoriches";
//let gamename = "treeoffortune";
//let gamename = "monopoly";
//let gamename = "dolphinreef2";
let gamename = "royalchess";

const gameversion = "1.04";

const isBuild = false;
const isLive = true;

const isFullBuild = true;

const gamePath = "games/" + gameType + "/" + gamename;

let outputPath = gamePath + "/dist";
let gameAssetPath = "";
let commonAssetPath = "";
let outputFilesArray = [
  { from: "../gameassets", to: gameAssetPath + "gameassets" },
  {
    from: "../../../../../slot_core/games/funhouse/common",
    to: commonAssetPath + "common",
  },
  {
    from: "../../../../../slot_core/games/funhouse/jslibs",
    to: commonAssetPath + "jslibs",
  },
  {
    from: "../../../../../slot_core/games/funhouse/config",
    to: commonAssetPath + "config",
  },
  {
    from: "../../../../../slot_core/games/funhouse/env",
    to: commonAssetPath + "env",
  },
];
if (isBuild) {
  commonAssetPath = "";
  if (isLive) {
    //outputPath = '../_deploy_live/' + gamename;
    outputPath = "../funhouse_fe_build/" + gamename;
    commonAssetPath = "../";
    if (isFullBuild) {
      outputFilesArray = [
        { from: "../gameassets", to: gameAssetPath + "gameassets" },
        {
          from: "../../../../../slot_core/games/funhouse/common",
          to: commonAssetPath + "common",
        },
        {
          from: "../../../../../slot_core/games/funhouse/jslibs",
          to: commonAssetPath + "jslibs",
        },
        {
          from: "../../../../../slot_core/games/funhouse/config",
          to: commonAssetPath + "config",
        },
        {
          from: "../../../../../slot_core/games/funhouse/env",
          to: commonAssetPath + "env",
        },
      ];
    } else {
      outputFilesArray = [
        {
          from: "../../../../../slot_core/games/funhouse/common",
          to: commonAssetPath + "common",
        },
        {
          from: "../../../../../slot_core/games/funhouse/jslibs",
          to: commonAssetPath + "jslibs",
        },
        {
          from: "../../../../../slot_core/games/funhouse/config",
          to: commonAssetPath + "config",
        },
        {
          from: "../../../../../slot_core/games/funhouse/env",
          to: commonAssetPath + "env",
        },
      ];
    }
  } else {
    outputPath = "../_deploy_staging/" + gamename;
    commonAssetPath = "../";
    if (isFullBuild) {
      outputFilesArray = [
        { from: "../gameassets", to: gameAssetPath + "gameassets" },
        {
          from: "../../../../../slot_core/games/funhouse/common",
          to: commonAssetPath + "common",
        },
        {
          from: "../../../../../slot_core/games/funhouse/jslibs",
          to: commonAssetPath + "jslibs",
        },
        {
          from: "../../../../../slot_core/games/funhouse/config",
          to: commonAssetPath + "config",
        },
        {
          from: "../../../../../slot_core/games/funhouse/env",
          to: commonAssetPath + "env",
        },
      ];
    } else {
      outputFilesArray = [
        {
          from: "../../../../../slot_core/games/funhouse/common",
          to: commonAssetPath + "common",
        },
        {
          from: "../../../../../slot_core/games/funhouse/jslibs",
          to: commonAssetPath + "jslibs",
        },
        {
          from: "../../../../../slot_core/games/funhouse/config",
          to: commonAssetPath + "config",
        },
        {
          from: "../../../../../slot_core/games/funhouse/env",
          to: commonAssetPath + "env",
        },
      ];
    }
  }
}

const path = require("path");
const Webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const webpack = require("webpack");

const URL_LAUNCHING_PARAMETERS = require("./launch.parameters");
const DEV_SERVER_HOST = "localhost";
const DEV_SERVER_PORT = "4040";
const isProduction = isBuild;

const getURL = (urlParameters) => {
  let resultStr = "";
  Object.keys(urlParameters).forEach((key) => {
    resultStr =
      resultStr +
      `${resultStr == "" ? "" : "&"}${key}=${encodeURIComponent(
        urlParameters[key]
      )}`;
  });
  return resultStr;
};

const config = {
  mode: isProduction ? "production" : "development",
  devtool: isProduction ? false : "sourcemap",
  context: path.join(__dirname, gamePath, "js"),
  entry: {
    app: [
      ...(isProduction ? [] : ["webpack/hot/only-dev-server"]),
      path.join(__dirname, gamePath, "js", "main.js"),
    ],
  },
  devServer: {
    https: false,
    host: DEV_SERVER_HOST,
    port: DEV_SERVER_PORT,
    open: true,
    openPage: `index.html?${getURL(URL_LAUNCHING_PARAMETERS)}`,
  },
  resolve: {
    modules: [path.resolve("./node_modules"), path.resolve("./src")],
    extensions: [".json", ".js", ".jsx"],
  },
  output: {
    path: path.join(__dirname, outputPath),
    filename: "gameassets/" + gameversion + "/[name].[hash].js",
    publicPath: "",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.join(__dirname, gamePath),
          path.join(__dirname, "node_modules"),
        ],
        loader: "babel-loader",
      },
      {
        test: /\.hbs$/,
        exclude: /node_modules/,
        loader: "handlebars-loader",
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ],
    // loaders: [{
    //     test: /\.css$/,
    //     loader: "style-loader!css-loader"
    //   }]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "../index.hbs",
    }),

    new CopyWebpackPlugin(outputFilesArray),
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NoEmitOnErrorsPlugin(),
    new Webpack.ProvidePlugin({
      regeneratorRuntime: "regenerator-runtime/runtime",
    }),
  ],
  watchOptions: {
    ignored: [
      /.\/node_modules/,
      /.\/src\/locales\/(.)+\/translations.json/,
      /.\/src\/js\/envParameters.json/,
    ],
  },
};

if (isProduction) {
  config.optimization = {
    minimizer: [new UglifyJsPlugin({ uglifyOptions: { safari10: true } })],
  };
}

module.exports = config;
