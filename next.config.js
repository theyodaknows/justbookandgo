/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Short vanity links for ads/print
      {
        source: '/bh-plumber',
        destination: '/plumbing/beverly-hills-90210/',
        permanent: true,
      },
      {
        source: '/dtla-hvac',
        destination: '/hvac/downtown-los-angeles-90021/',
        permanent: true,
      },
      {
        source: '/glendale-electric',
        destination: '/electrical/glendale-91203/',
        permanent: true,
      },
      {
        source: '/sm-plumber',
        destination: '/plumbing/santa-monica-90401/',
        permanent: true,
      },
      {
        source: '/burbank-hvac',
        destination: '/hvac/burbank-91505/',
        permanent: true,
      },
      {
        source: '/pasadena-electric',
        destination: '/electrical/pasadena-91101/',
        permanent: true,
      },
      // Optional extras
      {
        source: '/emergency-plumber-90210',
        destination: '/plumbing/beverly-hills-90210/',
        permanent: true,
      },
      {
        source: '/rtu-repair-dtla',
        destination: '/hvac/downtown-los-angeles-90021/',
        permanent: true,
      },
      {
        source: '/ev-chargers-pasadena',
        destination: '/electrical/pasadena-91101/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
