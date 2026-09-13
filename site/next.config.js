/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'DerKodex Kasm Registry',
    description: 'Custom Kasm Workspaces for the derkodex homelab.',
    icon: '/img/logo.svg',
    listUrl: 'https://vdaular.github.io/kasm-registry/',
    contactUrl: 'https://github.com/vdaular/kasm-registry/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
