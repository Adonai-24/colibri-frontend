/*****************************************************************************
 * @Author                : adolnb<loro.lorenzonunez@gmail.com>              *
 * @CreatedDate           : 2025-11-19 11:05:09                              *
 * @LastEditors           : adolnb<loro.lorenzonunez@gmail.com>              *
 * @LastEditDate          : 2025-11-24 02:58:53                              *
 * @FilePath              : Button.d.ts                                      *
 * @CopyRight             : © 2025 Adonai LN - B0MB0                         *
 ****************************************************************************/

export type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary";
    children: React.ReactNode;
    color?: string;
};
