/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        domains: ['messages-dump.s3.ap-south-1.amazonaws.com'],
        unoptimized: true,
    },
};

export default nextConfig;
