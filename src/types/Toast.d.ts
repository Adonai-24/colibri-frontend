/*****************************************************************************
 * @Author                : adolnb<loro.lorenzonunez@gmail.com>              *
 * @CreatedDate           : 2025-11-19 10:45:48                              *
 * @LastEditors           : adolnb<loro.lorenzonunez@gmail.com>              *
 * @LastEditDate          : 2025-11-19 17:21:51                              *
 * @FilePath              : Toast.d.ts                                       *
 * @CopyRight             : © 2025 Adonai LN - B0MB0                         *
 ****************************************************************************/

type ToastType = "success" | "error" | "warning" | "info";

type Toast = {
    id: number;
    message: string;
    type: ToastType;
};

export type ToastState = {
    toasts: Toast[];
    show: (message: string, type?: ToastType) => void;
    remove: (id: number) => void;
};
