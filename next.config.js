module.exports = {
  poweredByHeader: false,
  // Isolate manual preview builds from the managed dev server's `.next`
  // directory so the two never trample each other's output.
  distDir: process.env.PREVIEW_DIST_DIR || ".next",
  images: {
    formats: ["image/webp"],
    minimumCacheTTL: 86400,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
    ],
  },
  async headers() {
    return [{ source: "/optimized/:path*", headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] }];
  },
  async redirects() {
    return [
      { source: "/works/taskly", destination: "/works/taleka", permanent: true },
      { source: "/works/draftanakitb", destination: "/works/ganesa-space", permanent: true },
      { source: "/chatbot", destination: "https://pablonification-rag-gemini2-0-pablo.hf.space/", permanent: false },
    ];
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      type: "asset/resource",
    });
    return config;
  },
};
