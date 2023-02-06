/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.plugins.push(
      new options.webpack.container.ModuleFederationPlugin({
        name:"MfExample",
        remotes: {
            MfExample:'MfExample@http://localhost:3000/remoteEntry.js',
        },
        exposes: {},
        shared: {},
     })
    );
    return config;
  }
}

module.exports = nextConfig
