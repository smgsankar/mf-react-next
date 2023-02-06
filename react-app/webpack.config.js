const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
    publicPath: "auto",
  },
  devServer: {
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif|jpe?g|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              publicPath: "./img",
              emitFile: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "MfExample",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./MfExample": "./src/App",
      },
      shared: [
        {
          react: {
            eager: true,
            singleton: true,
            requiredVersion: false,
          },
        },
        {
          "react-dom": {
            eager: true,
            singleton: true,
            requiredVersion: false,
          },
        },
      ],
    }),
  ],
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
};
