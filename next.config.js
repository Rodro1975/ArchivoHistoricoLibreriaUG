/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.alias["components"] = path.join(__dirname, "Components"); // Ajusta el alias para la carpeta Components
    return config;
  },
};

module.exports = nextConfig;
