/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'tailwindcss.com',
                port: '',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '5000',
            },
        ],
    },
}

module.exports = nextConfig
