/*****************************************************************************
 * @Author                : adolnb<loro.lorenzonunez@gmail.com>              *
 * @CreatedDate           : Invalid Date                                     *
 * @LastEditors           : adolnb<loro.lorenzonunez@gmail.com>              *
 * @LastEditDate          : 2025-11-28 13:15:54                              *
 * @FilePath              : index.ts                                         *
 * @CopyRight             : © 2025 Adonai LN - B0MB0                         *
 ****************************************************************************/


import { inputs } from "./formatters/input";
import { formatPhone } from "./formatters/phone";
import { validateConductor } from "./validators/conductor";
import { validateEmployee } from "./validators/employee";
import { validateLogin } from "./validators/login";
import { validateVehicle } from "./validators/vehicle";


const validators = {
    login: validateLogin,
    employee: validateEmployee,
    vehicle: validateVehicle,
    conductor: validateConductor,
//   taxis: validateTaxi,
//   drivers: validateDriver,
//   assignments: validateAssignment,
//   users: validateUser,
};

const formatters = {
    phone: formatPhone,
    inputs: inputs,
}

export const utils = { validators, formatters };


// function validateTaxi(data: { plate: string; model: string; year: number }) {
//   const errors: { plate?: string; model?: string; year?: string } = {};

//   if (!data.plate.trim()) errors.plate = "La placa es obligatoria";
//   if (!data.model.trim()) errors.model = "El modelo es obligatorio";
//   if (!data.year || data.year < 2000 || data.year > new Date().getFullYear())
//     errors.year = "Año inválido";

//   return errors;
// }


// function validateDriver(data: { name: string; license: string }) {
//   const errors: { name?: string; license?: string } = {};

//   if (!data.name.trim()) errors.name = "El nombre es obligatorio";
//   if (!data.license.trim()) errors.license = "La licencia es obligatoria";

//   return errors;
// }

// function validateAssignment(data: { taxiId: string; driverId: string }) {
//   const errors: { taxiId?: string; driverId?: string } = {};

//   if (!data.taxiId) errors.taxiId = "Debe seleccionar un taxi";
//   if (!data.driverId) errors.driverId = "Debe seleccionar un conductor";

//   return errors;
// }

// function validateUser(data: { name: string; email: string; role: string }) {
//   const errors: { name?: string; email?: string; role?: string } = {};

//   if (!data.name.trim()) errors.name = "El nombre es obligatorio";
//   if (!data.email.trim()) {
//     errors.email = "El correo es obligatorio";
//   } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email)) {
//     errors.email = "Correo inválido";
//   }

//   if (!data.role) errors.role = "Debe asignar un rol";

//   return errors;
// }