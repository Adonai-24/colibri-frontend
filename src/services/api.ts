/*****************************************************************************
 * @Author                : adolnb<loro.lorenzonunez@gmail.com>              *
 * @CreatedDate           : 2025-11-19 12:57:00                              *
 * @LastEditors           : adolnb<loro.lorenzonunez@gmail.com>              *
 * @LastEditDate          : 2025-11-26 13:58:01                              *
 * @FilePath              : api.ts                                           *
 * @CopyRight             : © 2025 Adonai LN - B0MB0                         *
 ****************************************************************************/

import { ENV } from "@/constants/constants";


async function request(endpoint: string, options: RequestInit = {}) {
    const url = `${ENV.API_URL}/api${endpoint}`;
    const headers: Record<string, string> = {};

    const token = localStorage.getItem(ENV.TOKEN_KEY);

    if (!(options.body instanceof FormData)) headers["Content-Type"] = "application/json";
    
    if (token) headers["Authorization"] = `Bearer ${token}`;
    
    const config: RequestInit = {
        ...options,
        headers: {
            ...headers,
            ...(options.headers || {}),
        },
        credentials: "include",
    };
    
    try {
        const response = await fetch(url, config);
        const data = await response.json();
        if (!response.ok) throw new Error(data.message || "Error en la petición");
        
        return data;
    } catch (error: any) {
        throw error;
    }
}

export const api = {
  get: (endpoint: string) => request(endpoint, { method: "GET" }),
  post: (endpoint: string, body: any) => request(endpoint, { method: "POST", body: JSON.stringify(body) }),
  postForm: (endpoint: string, body: FormData) => request(endpoint, { method: "POST", body }),
  put: (endpoint: string, body: any) => request(endpoint, { method: "PUT", body: JSON.stringify(body) }),
  putForm: (endpoint: string, body: FormData) => request(endpoint, { method: "PUT", body }),
  delete: (endpoint: string) => request(endpoint, { method: "DELETE" }),
};
