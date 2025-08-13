module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
    ],
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      type: "asset/resource",
    });
    return config;
  },
};
