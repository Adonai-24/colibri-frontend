/*****************************************************************************
 * @Author                : adolnb<loro.lorenzonunez@gmail.com>              *
 * @CreatedDate           : 2025-11-19 10:15:20                              *
 * @LastEditors           : adolnb<loro.lorenzonunez@gmail.com>              *
 * @LastEditDate          : 2025-11-20 02:30:56                              *
 * @FilePath              : Loading.d.ts                                     *
 * @CopyRight             : © 2025 Adonai LN - B0MB0                         *
 ****************************************************************************/

export type LoadingType = {
    isLoading: boolean;
    message: string | null;
    minDuration: number;
    start: (message?: string) => () => void;
    stop: () => void;
};
