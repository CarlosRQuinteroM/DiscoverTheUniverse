/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    disableStaticImages: true,
    domains: ["solarsystem.nasa.gov", "invdes.com.mx", "eyes.nasa.gov"],
  },
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
};
