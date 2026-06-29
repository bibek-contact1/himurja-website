import type { NextConfig } from "next";
import path from "node:path";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isGithubPages = process.env.GITHUB_ACTIONS === "true" && Boolean(repoName);

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGithubPages ? `/${repoName}` : undefined,
  assetPrefix: isGithubPages ? `/${repoName}/` : undefined,
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
