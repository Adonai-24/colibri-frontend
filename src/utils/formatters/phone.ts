/*****************************************************************************
 * @Author                : adolnb<loro.lorenzonunez@gmail.com>              *
 * @CreatedDate           : 2025-11-23 22:18:28                              *
 * @LastEditors           : adolnb<loro.lorenzonunez@gmail.com>              *
 * @LastEditDate          : 2025-11-24 10:23:04                              *
 * @FilePath              : phone.ts                                         *
 * @CopyRight             : © 2025 Adonai LN - B0MB0                         *
 ****************************************************************************/

export const formatPhone = (phone: string | undefined) => {
    if (!phone) return "—";

    const digits = phone.replace(/\D/g, "");

    if (digits.length !== 12) return phone;

    const country = digits.slice(0, 2);
    const area = digits.slice(2, 5);
    const first = digits.slice(5, 8);
    const last = digits.slice(8);

    return `+${country} ${area} ${first} ${last}`;
};
