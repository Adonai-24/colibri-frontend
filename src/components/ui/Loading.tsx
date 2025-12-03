/*****************************************************************************
 * @Author                : adolnb<loro.lorenzonunez@gmail.com>              *
 * @CreatedDate           : 2025-11-19 10:17:55                              *
 * @LastEditors           : adolnb<loro.lorenzonunez@gmail.com>              *
 * @LastEditDate          : 2025-11-23 22:40:05                              *
 * @FilePath              : Loading.tsx                                      *
 * @CopyRight             : © 2025 Adonai LN - B0MB0                         *
 ****************************************************************************/

"use client";
import Image from "next/image";
import { useLoadingStore } from "@/store/loading.store";
import { images } from "@/constants/images";


export default function LoadingComponent() {
    const { isLoading, message } = useLoadingStore();

    if (!isLoading) return null;
    
    return (
        <div className="fixed inset-0 z-[9999] bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center gap-4">
            <Image src={images.logos.transparentColibri} alt="Colibri Logo" width={90} height={90} className="animate-fade-in" priority />
            <div className="h-14 w-14 border-4 border-[var(--primary)] border-t-transparent animate-spin rounded-full"></div>
            {message && (
                <p className="text-subtitle text-[var(--primary)] text-xl font-medium animate-pulse">{message}</p>
            )}
        </div>
    );
};
