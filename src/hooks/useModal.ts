/*****************************************************************************
 * @Author                : adolnb<loro.lorenzonunez@gmail.com>              *
 * @CreatedDate           : 2025-11-24 03:59:31                              *
 * @LastEditors           : adolnb<loro.lorenzonunez@gmail.com>              *
 * @LastEditDate          : 2025-11-28 10:42:33                              *
 * @FilePath              : useModal.ts                                      *
 * @CopyRight             : © 2025 Adonai LN - B0MB0                         *
 ****************************************************************************/

"use client";
import * as React from "react";
import { ModalType } from "@/types/Modal";


export function useModal() {
    const [modalState, setModalState] = React.useState<ModalType>({
        open: false,
        title: "",
        size: "md",
        children: null,
        onConfirm: () => undefined,
    });
    
    const openModal = (options: Omit<ModalType, "open">) => {
        setModalState({ ...options, open: true, onClose: closeModal });
    };
    
    const closeModal = () => {
        setModalState(prev => ({ ...prev, open: false }));
    };
    
    const confirmModal = () => {
        modalState.onConfirm?.();
        closeModal();
    };

    return { modalState, openModal, closeModal, confirmModal };
};
