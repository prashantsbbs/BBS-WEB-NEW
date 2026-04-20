/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'bbs-lightsail-bucket.s3.ap-south-1.amazonaws.com',
        ]
    }
};

export default nextConfig;
