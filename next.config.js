require('dotenv').config({ path: '.env.local' });


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_MINIMAL_EXCHANGE_OWNER_ADDRESS : process.env.NEXT_MINIMAL_EXCHANGE_OWNER_ADDRESS,
    NEXT_MINIMAL_EXCHANGE_ADDRESS : process.env.NEXT_MINIMAL_EXCHANGE_ADDRESS,
    NEXT_SUBSCRIPTION_ADDRESS : process.env.NEXT_SUBSCRIPTION_ADDRESS,
    NEXT_OPERATOR_ADDRESS : process.env.NEXT_OPERATOR_ADDRESS,
    NEXT_MINIMAL_EXCHANGE_OWNER_SEED : process.env.NEXT_MINIMAL_EXCHANGE_OWNER_SEED,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false
    }
    return config
  }
}

module.exports = nextConfig
