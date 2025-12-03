/*****************************************************************************
 * @Author                : adolnb<loro.lorenzonunez@gmail.com>              *
 * @CreatedDate           : 2025-11-19 10:48:53                              *
 * @LastEditors           : adolnb<loro.lorenzonunez@gmail.com>              *
 * @LastEditDate          : 2025-11-19 10:52:45                              *
 * @FilePath              : toast.store.ts                                   *
 * @CopyRight             : © 2025 Adonai LN - B0MB0                         *
 ****************************************************************************/

import { create } from "zustand";
import { ToastState } from "@/types/Toast";


export const useToastStore = create<ToastState>((set) => ({
    toasts: [],
    
    show: (message, type = "info") =>
        set((state) => ({
            toasts: [
                ...state.toasts,
                { id: Date.now(), message, type },
            ],
        })),
  
    remove: (id) =>
        set((state) => ({
            toasts: state.toasts.filter((t) => t.id !== id),
        })),
}));
