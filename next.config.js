/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export', // enables static site export
    trailingSlash: true,
    output: 'export',
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'optigoapps.com',
                pathname: '/**', // match all paths under the domain
            },
        ],
    },
};

export default nextConfig;