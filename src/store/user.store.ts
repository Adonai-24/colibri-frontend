/*****************************************************************************
 * @Author                : adolnb<loro.lorenzonunez@gmail.com>              *
 * @CreatedDate           : 2025-11-20 05:30:14                              *
 * @LastEditors           : adolnb<loro.lorenzonunez@gmail.com>              *
 * @LastEditDate          : 2025-11-20 06:02:48                              *
 * @FilePath              : user.store.ts                                    *
 * @CopyRight             : © 2025 Adonai LN - B0MB0                         *
 ****************************************************************************/

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserType } from "@/types/User";


export const useUserStore = create<UserType>()(
    persist(
        (set) => ({
            user: null,
            setUser: (user) => set({ user }),
            clearUser: () => set({ user: null }),
        }),
        {
            name: "user-storage",
        }
    )
);
