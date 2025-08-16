/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true
  },
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
      // Long Beach vanity redirects
      {
        source: '/lb-plumber',
        destination: '/plumbing/long-beach-90802/',
        permanent: true,
      },
      {
        source: '/lb-hvac',
        destination: '/hvac/long-beach-90813/',
        permanent: true,
      },
      {
        source: '/lb-electric',
        destination: '/electrical/long-beach-90806/',
        permanent: true,
      },
      // Torrance vanity redirects
      {
        source: '/torrance-plumber',
        destination: '/plumbing/torrance-90503/',
        permanent: true,
      },
      {
        source: '/torrance-hvac',
        destination: '/hvac/torrance-90501/',
        permanent: true,
      },
      {
        source: '/torrance-electric',
        destination: '/electrical/torrance-90505/',
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