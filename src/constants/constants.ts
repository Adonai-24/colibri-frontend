/*****************************************************************************
 * @Author                : adolnb<loro.lorenzonunez@gmail.com>              *
 * @CreatedDate           : 2025-11-19 12:15:06                              *
 * @LastEditors           : adolnb<loro.lorenzonunez@gmail.com>              *
 * @LastEditDate          : 2025-11-28 07:37:23                              *
 * @FilePath              : constants.ts                                     *
 * @CopyRight             : © 2025 Adonai LN - B0MB0                         *
 ****************************************************************************/

const PLATFORM = process.env.NEXT_PUBLIC_PLATFORM;
const PROVIDER = process.env.NEXT_PUBLIC_PROVIDER;
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const FRONT_URL = process.env.NEXT_PUBLIC_FRONT_URL;
const EMPLOYEE_ROL = {
    ADMIN: "administrador general",
    JEFE_TRANSPORTE: "jefe de transporte",
    AUDITOR: "auditor",
};
const VEHICLE_TYPE = {
    TAXI: "taxi",
    VAN: "van",
};

const GOOGLE_CLIENT = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
const TOKEN_KEY = "token"; // no mandar
const ROLES = {
    ADMIN: "administrador general",
    JEFE_TRANSPORTE: "jefe de Transporte",
    AUDITOR: "auditor",
    CONDUCTOR: "conductor",
};


export const ENV = { PLATFORM, PROVIDER, API_URL, FRONT_URL, EMPLOYEE_ROL, VEHICLE_TYPE, TOKEN_KEY };
