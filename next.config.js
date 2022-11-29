/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images:{
    domains: ['links.papareact.com','encrypted-tbn0.gstatic.com','upload.wikimedia.org',
    'scontent.fcok10-1.fna.fbcdn.net']
  },
  experimental: {
    appDir: true
  }
}
