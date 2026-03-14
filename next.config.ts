import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let basePath = "";

if (isGithubActions) {
  // e.g. "usari14/yaseenStudio" -> "yaseenStudio"
  const repo = process.env.GITHUB_REPOSITORY?.replace(/.*?\//, "");
  if (repo) {
    basePath = `/${repo}`;
  }
}

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath !== "" ? basePath : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
