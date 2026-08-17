import type { NextConfig } from "next";

// Served from https://gisleude.github.io/quem-e-o-meu-candidato/ on GitHub
// Pages, a project subpath rather than the domain root.
const repoName = "quem-e-o-meu-candidato";

const nextConfig: NextConfig = {
  agentRules: false,
  output: "export",
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
