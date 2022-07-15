/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['cdn.pixabay.com']
  },
  env:{
    MONGO_URL:"mongodb+srv://gundown:gundown@credentials.5vlv3qq.mongodb.net/?retryWrites=true&w=majority"
  }
}

module.exports = nextConfig
