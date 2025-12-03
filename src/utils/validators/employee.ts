/*****************************************************************************
 * @Author                : adolnb<loro.lorenzonunez@gmail.com>              *
 * @CreatedDate           : 2025-11-24 05:51:35                              *
 * @LastEditors           : adolnb<loro.lorenzonunez@gmail.com>              *
 * @LastEditDate          : 2025-11-26 13:51:02                              *
 * @FilePath              : employee.ts                                      *
 * @CopyRight             : © 2025 Adonai LN - B0MB0                         *
 ****************************************************************************/

import { common } from "./common";


function validateCreateEmployee(name: string, email: string, phone: string, rol: string, password: string, photo?: File | null) {
    const errors: { name?: string, email?: string, phone?: string, rol?: string, password?: string, file?: string } = {};

    errors.name = common.applyRules(name, [
        v => common.isRequired(v),
        v => common.minLength(v, 6),
        v => common.maxLength(v, 60)
    ]) || undefined;

    errors.email = common.applyRules(email, [
        v => common.isRequired(v),
        common.isEmail
    ]) || undefined;

    errors.phone = common.applyRules(phone, [
        v => common.isRequired(v),
        v => v.replace(/\D/g, "").length === 12 ? null : "Debe contener 12 dígitos."
    ]) || undefined;

    errors.rol = common.applyRules(rol, [
        v => common.isRequired(v)
    ]) || undefined;

    errors.password = common.applyRules(password, [
        v => common.isRequired(v),
        v => common.minLength(v, 8),
        v => common.maxLength(v, 32)
    ]) || undefined;

    errors.file = common.applyFileRules(photo ?? null, [
        (f) => common.isFileType(f || null, ["image/jpeg", "image/png"]),
        (f) => common.maxFileSize(f || null, 5)
    ]) || undefined;

    return errors;
};

function validateUpdateEmployee(name: string, email: string, phone: string, rol: string, photo?: File | null) {
    const errors: { name?: string, email?: string, phone?: string, rol?: string, file?: string } = {};

    errors.name = common.applyRules(name, [
        v => common.isRequired(v),
        v => common.minLength(v, 6),
        v => common.maxLength(v, 60)
    ]) || undefined;

    errors.email = common.applyRules(email, [
        v => common.isRequired(v),
        common.isEmail
    ]) || undefined;

    errors.phone = common.applyRules(phone, [
        v => common.isRequired(v),
        v => v.replace(/\D/g, "").length === 12 ? null : "Debe contener 12 dígitos."
    ]) || undefined;

    errors.rol = common.applyRules(rol, [
        v => common.isRequired(v)
    ]) || undefined;

    errors.file = common.applyFileRules(photo ?? null, [
        (f) => common.isFileType(f || null, ["image/jpeg", "image/png"]),
        (f) => common.maxFileSize(f || null, 5)
    ]) || undefined;

    return errors;
};


export const validateEmployee = { validateCreateEmployee, validateUpdateEmployee };
