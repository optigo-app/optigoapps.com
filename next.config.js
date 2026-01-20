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
                pathname: '/**', 
            },
        ],
    },
};

export default nextConfig;