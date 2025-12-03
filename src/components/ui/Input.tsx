/*****************************************************************************
 * @Author                : adolnb<loro.lorenzonunez@gmail.com>              *
 * @CreatedDate           : 2025-11-19 06:46:51                              *
 * @LastEditors           : adolnb<loro.lorenzonunez@gmail.com>              *
 * @LastEditDate          : 2025-11-25 16:09:06                              *
 * @FilePath              : Input.tsx                                        *
 * @CopyRight             : © 2025 Adonai LN - B0MB0                         *
 ****************************************************************************/

import * as React from "react";
import Image from "next/image";
import { images } from "@/constants/images";
import { InputType } from "@/types/Input";


export default function InputComponent({ id, type, select, value, placeholder, onChange, error, label, ...props }: InputType) {
    const [showPassword, setShowPassword] = React.useState(false);
    const isPassword = type === "password";
    const isSelect = type === "select";
    
    return (
        <div className="relative w-full mb-5">
            {isSelect ? (
                <select id={id} value={value} onChange={onChange} className={`peer text-sm w-full rounded-xl outline-none transition pt-6 pb-2 px-3 md:px-4 lg:px-5 bg-[var(--transparent)] text-[var(--text-primary)] placeholder-[var(--text-secondary)] border`} style={{ borderColor: error ? 'var(--error)' : 'var(--border-hover)', }} {...props} aria-invalid={!!error} aria-describedby={error ? `${id}-error` : undefined} >
                    <option value="">{placeholder}</option>
                    {select?.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
            ) : (
                <input id={id} type={isPassword && showPassword ? "text" : type} {...(type !== "file" ? { value } : {})} placeholder={placeholder} onChange={onChange} className={`peer text-sm w-full rounded-xl outline-none transition pt-6 pb-2 px-3 md:px-4 lg:px-5 bg-[var(--transparent)] text-[var(--text-primary)] placeholder-[var(--text-secondary)] border`} style={{ borderColor: error ? 'var(--error)' : 'var(--border-hover)', }} {...props} aria-invalid={!!error} aria-describedby={error ? `${id}-error` : undefined} />
            )}
            
            <label htmlFor={id} className={`text-body absolute left-3 top-1 px-1 transition-colors duration-200 text-[var(--text-secondary)] peer-focus:text-[var(--primary)]`}>
                {label}
            </label>

            {isPassword && (
                <button type="button" onClick={() => setShowPassword((prev) => !prev)} className="absolute right-5 top-[1.125rem] cursor-pointer border-none p-0 bg-[var(--transparent)] text-[var(--text-secondary)] hover:text-[var(--primary)]">
                    <Image src={showPassword ? images.icons.openEye : images.icons.closeEye} alt="toggle password" width={20} height={20} className="opacity-60" />
                </button>
            )}

            {error && (
                <p id={`${id}-error`} className="text-note left-3 text-[var(--error)] text-sm mt-1">
                    {error}
                </p>
            )}
        </div>
    );
};
