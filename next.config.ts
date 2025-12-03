/******************************************************************************
 * @Author                : adolnb<loro.lorenzonunez@gmail.com>               *
 * @CreatedDate           : 2025-11-26 09:16:45                               *
 * @LastEditors           : adolnb<loro.lorenzonunez@gmail.com>               *
 * @LastEditDate          : 2025-11-26 13:38:48                               *
 * @FilePath              : next.config.ts                                    *
 * @CopyRight             : © 2025 Adonai LN - B0MB0                          *
 *****************************************************************************/

import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "as-colibri-uteq.s3.us-east-005.backblazeb2.com",
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
