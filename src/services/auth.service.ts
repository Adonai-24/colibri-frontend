/*****************************************************************************
 * @Author                : adolnb<loro.lorenzonunez@gmail.com>              *
 * @CreatedDate           : 2025-11-19 12:59:54                              *
 * @LastEditors           : adolnb<loro.lorenzonunez@gmail.com>              *
 * @LastEditDate          : 2025-11-24 01:26:28                              *
 * @FilePath              : auth.service.ts                                  *
 * @CopyRight             : © 2025 Adonai LN - B0MB0                         *
 ****************************************************************************/

import { api } from "@/services/api";
import { LoginData } from "@/types/Login";


const login = async (data: LoginData) => {
    const res = await api.post("/auth/login", data);
    return res;
};

const logout = async () => {
    const res = await api.get("/auth/logout");
    return res;
};

export const authService = { login, logout };
