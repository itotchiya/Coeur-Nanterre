const fallbackBuildVersion = [
  process.env.npm_package_version ?? "dev",
  new Date().toISOString(),
].join("-");

export const BUILD_VERSION =
  process.env.VERCEL_GIT_COMMIT_SHA ??
  process.env.VERCEL_DEPLOYMENT_ID ??
  fallbackBuildVersion;

