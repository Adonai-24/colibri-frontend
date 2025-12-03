/*****************************************************************************
 * @Author                : adolnb<loro.lorenzonunez@gmail.com>              *
 * @CreatedDate           : 2025-11-28 13:15:21                              *
 * @LastEditors           : adolnb<loro.lorenzonunez@gmail.com>              *
 * @LastEditDate          : 2025-11-28 15:07:05                              *
 * @FilePath              : conductor.ts                                     *
 * @CopyRight             : © 2025 Adonai LN - B0MB0                         *
 ****************************************************************************/

import { ConductorDocuments } from "@/types/User";
import { common } from "./common";


function validateCreateConductor(name: string, email: string, phone: string, password: string, photo: File | null, documents: { ine: File | null; licencia: File | null; acta: File | null; }) {
    const errors: { name?: string; email?: string; phone?: string; password?: string; photo?: string; documents?: ConductorDocuments; } = { documents: {} }

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

    errors.password = common.applyRules(password, [
        v => common.isRequired(v),
        v => common.minLength(v, 8),
        v => common.maxLength(v, 32)
    ]) || undefined;

    errors.photo = common.applyFileRules(photo ?? null, [
        (f) => common.isFileType(f || null, ["image/jpeg", "image/png"]),
        (f) => common.maxFileSize(f || null, 5)
    ]) || undefined;

    errors.documents!.ine = common.applyFileRules(documents.ine ?? null, [
        (f) => common.isFileType(f || null, ["image/jpeg", "image/png"]),
        (f) => common.maxFileSize(f || null, 5),
    ]) || undefined;
    
    errors.documents!.licencia = common.applyFileRules(documents.licencia ?? null, [
        (f) => common.isFileType(f || null, ["image/jpeg", "image/png"]),
        (f) => common.maxFileSize(f || null, 5),
    ]) || undefined;
    
    errors.documents!.acta = common.applyFileRules(documents.acta ?? null, [
        (f) => common.isFileType(f || null, ["image/jpeg", "image/png"]),
        (f) => common.maxFileSize(f || null, 5),
    ]) || undefined;
    
    return errors;
};

function validateUpdateConductor(email: string, phone: string, photo: File | null) {
    const errors: { email?: string; phone?: string; photo?: string } = {};

    errors.email = common.applyRules(email, [
        v => common.isRequired(v),
        common.isEmail
    ]) || undefined;

    errors.phone = common.applyRules(phone, [
        v => common.isRequired(v),
        v => v.replace(/\D/g, "").length === 12 ? null : "Debe contener 12 dígitos."
    ]) || undefined;

    errors.photo = common.applyFileRules(photo ?? null, [
        f => common.isFileType(f || null, ["image/jpeg", "image/png"]),
        f => common.maxFileSize(f || null, 5)
    ]) || undefined;

    return errors;
};

export const validateConductor = { validateCreateConductor, validateUpdateConductor };
