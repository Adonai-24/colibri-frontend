/*****************************************************************************
 * @Author                : adolnb<loro.lorenzonunez@gmail.com>              *
 * @CreatedDate           : 2025-11-28 08:04:07                              *
 * @LastEditors           : adolnb<loro.lorenzonunez@gmail.com>              *
 * @LastEditDate          : 2025-11-28 08:04:07                              *
 * @FilePath              : vehicle.service.ts                               *
 * @CopyRight             : © 2025 Adonai LN - B0MB0                         *
 ****************************************************************************/

import { Vehicle } from "@/types/Vehicles";
import { api } from "./api";


const getVehicles = async () => {
    const res = await api.get("/vehicles/list",);
    return res;
};

const createVehicle = async (data: Vehicle) => {
    const res = await api.post("/vehicles/add", data);
    return res;
};

const updateVehicle = async (id: string, data: Vehicle) => {
    const res = await api.put(`/vehicles/${id}`, data);
    return res;
};

const deleteVehicle = async (id: string) => {
    const res = await api.delete(`/vehicles/${id}`);
    return res;
};


export const vehicleService = { getVehicles, createVehicle, updateVehicle, deleteVehicle };
