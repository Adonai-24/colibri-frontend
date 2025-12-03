/*****************************************************************************
 * @Author                : adolnb<loro.lorenzonunez@gmail.com>              *
 * @CreatedDate           : 2025-11-20 20:38:55                              *
 * @LastEditors           : adolnb<loro.lorenzonunez@gmail.com>              *
 * @LastEditDate          : 2025-11-23 23:26:24                              *
 * @FilePath              : useNavbar.ts                                     *
 * @CopyRight             : © 2025 Adonai LN - B0MB0                         *
 ****************************************************************************/

import * as React from "react";
import { usePathname, useRouter } from "next/navigation";
import { useUserStore } from "@/store/user.store";
import { authService } from "@/services/auth.service";
import { useLoadingStore } from "@/store/loading.store";
import { useToastStore } from "@/store/toast.store";


export function useNavbar() {
    const router = useRouter();
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;
    
    const { start } = useLoadingStore();
    const { user, clearUser } = useUserStore();
    const { show } = useToastStore();

    const [isDropdownOpen, setDropdownOpen] = React.useState(false);
    // const isAdmin = React.useMemo(() => user?.rol === "administrador general", [user]);

    const handleLogout = async () => {
        let data;
        const stopLoader = start("Cerrando sesión...");

        try {
            data = await authService.logout();
            clearUser();
        } catch(err: any) {
            await stopLoader();
            show("Error: " + err.message, "error");
            return;
        }

        await stopLoader();
        show(data.message, "success");
        router.push("/");
    };

    return {
        user,
        // isAdmin,
        isActive,
        isDropdownOpen,
        setDropdownOpen,
        handleLogout,
    };
};
