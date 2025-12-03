/*****************************************************************************
 * @Author                : adolnb<loro.lorenzonunez@gmail.com>              *
 * @CreatedDate           : 2025-11-19 09:49:25                              *
 * @LastEditors           : adolnb<loro.lorenzonunez@gmail.com>              *
 * @LastEditDate          : 2025-11-24 06:57:02                              *
 * @FilePath              : useLogin.ts                                      *
 * @CopyRight             : © 2025 Adonai LN - B0MB0                         *
 ****************************************************************************/

"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { utils } from "@/utils/index";
import { useLoadingStore } from "@/store/loading.store";
import { useToastStore } from "@/store/toast.store";
import { authService } from "@/services/auth.service";
import { ENV } from "@/constants/constants";
import { useUserStore } from "@/store/user.store";


export function useLogin() {
    const router = useRouter();
    const { start } = useLoadingStore();
    const { show } = useToastStore();
    
    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const [errors, setErrors] = React.useState<{ email?: string; password?: string }>({});

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const newErrors = utils.validators.login(email, password);
        setErrors(newErrors);

        if (Object.values(newErrors).some(error => error !== undefined)) return;

        const stopLoader = start("Validando credenciales...");
        const { setUser } = useUserStore.getState();
        let data;

        try {
            data = await authService.login({ email, password, platform: ENV.PLATFORM });
            setUser(data.data.usuario);
        } catch(err: any) {
            await stopLoader();
            show("Error: " + err.message, "error");
            return;
        }

        await stopLoader();
        show(data.message, "success");
        router.push("/principal/inicio");
    };

    return {
        email,
        password,
        errors,
        setEmail,
        setPassword,
        handleLogin,
    };
};
