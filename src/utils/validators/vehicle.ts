/*****************************************************************************
 * @Author                : adolnb<loro.lorenzonunez@gmail.com>              *
 * @CreatedDate           : 2025-11-28 07:26:26                              *
 * @LastEditors           : adolnb<loro.lorenzonunez@gmail.com>              *
 * @LastEditDate          : 2025-11-28 07:33:44                              *
 * @FilePath              : vehicle.ts                                       *
 * @CopyRight             : © 2025 Adonai LN - B0MB0                         *
 ****************************************************************************/

import { common } from "./common";


function validateCreateVehicle(plate: string, brand: string, model: string, year: number, vehicleType: string, characteristics: { passengerCapacity: number; fuelType: string; transmission: string; maxSpeed: number; wheelchairAccessible: boolean; }) {
    // const errors: { plate?: string, brand?: string, model?: string, year?: number, vehicleType?: string, characteristics?: { passengerCapacity?: number; fuelType?: string; transmission?: string; maxSpeed?: number; wheelchairAccessible?: boolean; } } = {};
    const errors: any = {};

    errors.plate = common.applyRules(plate, [
        v => common.isRequired(v),
        v => common.minLength(v, 7),
        v => common.maxLength(v, 10),
        v => common.isPlate(v)
    ]) || undefined;

    errors.brand = common.applyRules(brand, [
        v => common.isRequired(v),
        v => common.minLength(v, 2),
        v => common.maxLength(v, 30),
    ]) || undefined;

    errors.model = common.applyRules(model, [
        v => common.isRequired(v),
        v => common.minLength(v, 2),
        v => common.maxLength(v, 30),
    ]) || undefined;

    errors.year = common.isYearValid(year)|| undefined;

    errors.vehicleType = common.applyRules(vehicleType, [
        v => common.isRequired(v),
    ]) || undefined;

    errors.passengerCapacity = characteristics.passengerCapacity > 0 ? null : "Debe ser mayor a 0.";

    errors.fuelType = common.applyRules(characteristics.fuelType, [
        v => common.isRequired(v),
    ]) || undefined;

    errors.transmission = common.applyRules(characteristics.transmission, [
        v => common.isRequired(v),
    ]) || undefined;

    errors.maxSpeed = common.isNumber(characteristics.maxSpeed) || (characteristics.maxSpeed > 0 ? null : "Debe ser mayor a 0.");
    
    return errors;
};

export const validateVehicle = { validateCreateVehicle };








// validateUpdateEmployee
// function validateUpdateEmployee(name: string, email: string, phone: string, rol: string, photo?: File | null) {
//     const errors: { name?: string, email?: string, phone?: string, rol?: string, file?: string } = {};

//     errors.name = common.applyRules(name, [
//         v => common.isRequired(v),
//         v => common.minLength(v, 6),
//         v => common.maxLength(v, 60)
//     ]) || undefined;

//     errors.email = common.applyRules(email, [
//             v => common.isRequired(v),
//         common.isEmail
//     ]) || undefined;

//     errors.phone = common.applyRules(phone, [
//         v => common.isRequired(v),
//         v => v.replace(/\D/g, "").length === 12 ? null : "Debe contener 12 dígitos."
//     ]) || undefined;

//     errors.rol = common.applyRules(rol, [
//         v => common.isRequired(v)
//     ]) || undefined;

//     errors.file = common.applyFileRules(photo ?? null, [
//         (f) => common.isFileType(f || null, ["image/jpeg", "image/png"]),
//         (f) => common.maxFileSize(f || null, 5)
//     ]) || undefined;

//     return errors;
// };