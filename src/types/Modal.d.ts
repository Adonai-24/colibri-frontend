/*****************************************************************************
 * @Author                : adolnb<loro.lorenzonunez@gmail.com>              *
 * @CreatedDate           : 2025-11-24 02:57:00                              *
 * @LastEditors           : adolnb<loro.lorenzonunez@gmail.com>              *
 * @LastEditDate          : 2025-11-24 08:59:22                              *
 * @FilePath              : Modal.d.ts                                       *
 * @CopyRight             : © 2025 Adonai LN - B0MB0                         *
 ****************************************************************************/

import { sizeClasses } from "@/constants/modals";


export type ModalType = {
    open: boolean;
    onClose?: () => void;
    onConfirm: () => void;
    title: string;
    size: keyof typeof sizeClasses;
    children: React.ReactNode;
};
