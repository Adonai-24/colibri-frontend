/*****************************************************************************
 * @Author                : adolnb<loro.lorenzonunez@gmail.com>              *
 * @CreatedDate           : 2025-11-19 10:16:23                              *
 * @LastEditors           : adolnb<loro.lorenzonunez@gmail.com>              *
 * @LastEditDate          : 2025-11-20 02:37:56                              *
 * @FilePath              : loading.store.ts                                 *
 * @CopyRight             : © 2025 Adonai LN - B0MB0                         *
 ****************************************************************************/

import { create } from "zustand";
import { LoadingType } from "@/types/Loading";


export const useLoadingStore = create<LoadingType>((set, get) => ({
    isLoading: false,
    message: null,
    minDuration: 1500,
    start: (message?: string) => {
        const startTime = Date.now();
        set({ isLoading: true, message });
        const stopFn = () => {
            return new Promise<void>((resolve) => {
                const elapsed = Date.now() - startTime;
                const remaining = get().minDuration - elapsed;

                if (remaining > 0) {
                    setTimeout(() => {
                        set({ isLoading: false, message: null });
                        resolve();
                    }, remaining);
                } else {
                    set({ isLoading: false, message: null });
                    resolve();
                }
            });
        };

        return stopFn;
    },
    stop: () => { set({ isLoading: false, message: null }); },
}));
