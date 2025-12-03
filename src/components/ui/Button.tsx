/*****************************************************************************
 * @Author                : adolnb<loro.lorenzonunez@gmail.com>              *
 * @CreatedDate           : 2025-11-19 11:09:26                              *
 * @LastEditors           : adolnb<loro.lorenzonunez@gmail.com>              *
 * @LastEditDate          : 2025-11-24 19:53:20                              *
 * @FilePath              : Button.tsx                                       *
 * @CopyRight             : © 2025 Adonai LN - B0MB0                         *
 ****************************************************************************/

import * as React from "react";
import { ButtonType } from "@/types/Button";


export default function ButtonComponent({ variant, color, className, children, ...props }: ButtonType) {
    let baseClasses = "rounded-lg shadow-md py-3 px-4 font-medium transition-colors duration-200 cursor-pointer";
    let style: React.CSSProperties = {};
    
    switch (variant) {
        case "primary":
            baseClasses += " bg-[var(--primary)] text-[var(--light)] hover:bg-[var(--border-hover)] hover:text-[var(--text-primary)]";
            break;
        case "secondary":
            baseClasses += " bg-[var(--transparent)] hover:bg-[var(--border-hover)]";
            style.border = `1px solid ${color}`;
            style.color = color;
            break;
        default:
            baseClasses += " bg-[var(--primary)] text-[var(--light)] hover:bg-[var(--border-hover)] hover:text-[var(--text-primary)]";
            break;
    }
    
    return (
        <button className={`${baseClasses} ${className}`} style={style} {...props}>
            {children}
        </button>
    );
};