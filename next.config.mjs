import {withSentryConfig} from '@sentry/nextjs';
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withSentryConfig(nextConfig, {

silent: true,
org: "Abhay",
project: "Abhay-Portfolio",
}, {

widenClientFileUpload: true,


transpileClientSDK: true,


hideSourceMaps: true,


disableLogger: true,


automaticVercelMonitors: true,
});