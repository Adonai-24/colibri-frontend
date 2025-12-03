/*****************************************************************************
 * @Author                : adolnb<loro.lorenzonunez@gmail.com>              *
 * @CreatedDate           : Invalid Date                                     *
 * @LastEditors           : adolnb<loro.lorenzonunez@gmail.com>              *
 * @LastEditDate          : 2025-11-23 10:58:45                              *
 * @FilePath              : login.ts                                         *
 * @CopyRight             : © 2025 Adonai LN - B0MB0                         *
 ****************************************************************************/

import { common } from "./common";


export function validateLogin(email: string, password: string) {
    const errors: { email?: string; password?: string } = {};

    errors.email = common.applyRules(email, [
        v => common.isRequired(v),
        common.isEmail,
    ]) || undefined;

    errors.password = common.applyRules(password, [
        v => common.isRequired(v),
        v => common.minLength(v, 8),
        v => common.maxLength(v, 32),
    ]) || undefined;
  
    return errors;
};
