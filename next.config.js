module.exports = {
    webpack: (config, { isServer }) => {
      config.module.rules.push({
        test: /\.(glb|gltf)$/,
        type: 'asset/resource',
      });
      return config;
    },
  };
  