/*****************************************************************************
 * @Author                : adolnb<loro.lorenzonunez@gmail.com>              *
 * @CreatedDate           : 2025-11-19 10:51:17                              *
 * @LastEditors           : adolnb<loro.lorenzonunez@gmail.com>              *
 * @LastEditDate          : 2025-11-19 10:53:02                              *
 * @FilePath              : Toast.tsx                                        *
 * @CopyRight             : © 2025 Adonai LN - B0MB0                         *
 ****************************************************************************/

"use client";
import * as React from "react";
import { useToastStore } from "@/store/toast.store";


export default function ToastComponent() {
    const { toasts, remove } = useToastStore();

    React.useEffect(() => {
        const timers = toasts.map((t) => setTimeout(() => remove(t.id), 3000));
    
        return () => timers.forEach(clearTimeout);
    }, [toasts, remove]);
    
    return (
        <div className="fixed top-5 right-5 z-[9999] space-y-3">
            {toasts.map((toast) => (
                <div key={toast.id} className={`px-4 py-3 rounded-lg shadow-lg text-white animate-slide-in ${toast.type === "success" ? "bg-green-600" : ""} ${toast.type === "error" ? "bg-red-600" : ""} ${toast.type === "warning" ? "bg-yellow-600" : ""} ${toast.type === "info" ? "bg-blue-600" : ""}`}>
                    {toast.message}
                </div>
            ))}
        </div>
    );
};
