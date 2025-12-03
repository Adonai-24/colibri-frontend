/*****************************************************************************
 * @Author                : adolnb<loro.lorenzonunez@gmail.com>              *
 * @CreatedDate           : 2025-11-19 09:42:10                              *
 * @LastEditors           : adolnb<loro.lorenzonunez@gmail.com>              *
 * @LastEditDate          : 2025-11-24 05:26:21                              *
 * @FilePath              : Input.d.ts                                       *
 * @CopyRight             : © 2025 Adonai LN - B0MB0                         *
 ****************************************************************************/

type SelectOption = {
    label: string;
    value: string;
};

export type InputType = {
    id: string;
    type?: string;
    select?: SelectOption[];
    value?: string;
    placeholder?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
    label: string;
    error?: string;
    [key: string]: any;
};
