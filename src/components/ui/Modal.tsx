/*****************************************************************************
 * @Author                : adolnb<loro.lorenzonunez@gmail.com>              *
 * @CreatedDate           : 2025-11-24 02:27:35                              *
 * @LastEditors           : adolnb<loro.lorenzonunez@gmail.com>              *
 * @LastEditDate          : 2025-11-25 14:21:38                              *
 * @FilePath              : Modal.tsx                                        *
 * @CopyRight             : © 2025 Adonai LN - B0MB0                         *
 ****************************************************************************/

import { sizeClasses } from "@/constants/modals";
import { ModalType } from "@/types/Modal";
import ButtonComponent from "./Button";


export default function ModalComponent({ open, onClose, onConfirm, title, size, children }: ModalType) {
    if (!open) return null;
    
    return (
        <div className={`fixed inset-0 bg-black/40 flex justify-center ${size === 'sm' ? 'items-center' : 'items-start'} overflow-y-auto z-50`}>
            <div className={`bg-white rounded-xl p-6 w-full ${sizeClasses[size]} shadow-xl`}>
                {title && (<h2 className="text-title text-[var(--primary)] text-xl mb-4">{title}</h2>)}
                
                <div className="mb-4">{children}</div>
                
                <div className="flex justify-end gap-2">
                    <ButtonComponent onClick={onClose} variant="secondary" color="var(--error)">
                        Cancelar
                    </ButtonComponent>
                    <ButtonComponent onClick={onConfirm} variant="primary">
                        Guardar
                    </ButtonComponent>
                </div>
            </div>
        </div>
    );
}
