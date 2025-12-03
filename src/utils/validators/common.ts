/*****************************************************************************
 * @Author                : adolnb<loro.lorenzonunez@gmail.com>              *
 * @CreatedDate           : 2025-11-23 10:43:19                              *
 * @LastEditors           : adolnb<loro.lorenzonunez@gmail.com>              *
 * @LastEditDate          : 2025-11-28 07:32:52                              *
 * @FilePath              : common.ts                                        *
 * @CopyRight             : © 2025 Adonai LN - B0MB0                         *
 ****************************************************************************/

import { RuleType } from "@/types/Rule";


const applyRules = (value: any, rules: RuleType[]) =>
    rules.map(r => r(value)).find(msg => msg !== null) ?? null;

const applyFileRules = (file: File | null, rules: ((f: File | null) => string | null)[]) =>
    rules.map(r => r(file)).find(msg => msg !== null) ?? null;

const isRequired = (value: string): string | null => {
    return value.trim() ? null : "Este campo es obligatorio.";
};

const minLength = (value: string, length: number, message?: string): string | null => {
    return value.length >= length ? null : message ?? `Debe tener al menos ${length} caracteres.`;
};

const maxLength = (value: string, length: number, message?: string): string | null => {
    return value.length <= length ? null : message ?? `No puede exceder ${length} caracteres.`;
};

const isEmail = (email: string): string | null => {
    return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) ? null : "Correo electrónico inválido.";
};

const isFileType = (file: File | null, allowedTypes: string[]): string | null => {
    if (!file) return null;
    return allowedTypes.includes(file.type) ? null : "Tipo de archivo no permitido.";
};

const maxFileSize = (file: File | null, maxMB: number): string | null => {
    if (!file) return null;
    return file.size <= maxMB * 1024 * 1024 ? null : `El archivo no puede superar ${maxMB}MB.`;
};

const isNumber = (value: number): string | null => {
    return !isNaN(Number(value)) ? null : "Debe ser un número válido.";
};

const isPlate = (value: string): string | null => {
    const regex = /^[A-Z0-9]{2}-[A-Z0-9]{2}-[A-Z0-9]{3}$/;
    return regex.test(value) ? null : "Formato de placa inválido. Ej: AB-1C-1Z9";
};

const isYearValid = (v: number): string | null => {
    const current = new Date().getFullYear();
    return v >= 1990 && v <= current ? null : `Debe estar entre 1990 y ${current}.`;
};

export const common = { applyRules, applyFileRules, isRequired, minLength, maxLength, isEmail, isFileType, maxFileSize, isNumber, isPlate, isYearValid };
