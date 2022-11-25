/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images:{
    domains: ['links.papareact.com','encrypted-tbn0.gstatic.com','upload.wikimedia.org',
    'scontent.fcok10-2.fna.fbcdn.net','scontent.fcok3-1.fna.fbcdn.net']
  },
  experimental: {
    appDir: true
  }
}
