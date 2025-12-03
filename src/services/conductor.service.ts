/*****************************************************************************
 * @Author                : adolnb<loro.lorenzonunez@gmail.com>              *
 * @CreatedDate           : 2025-11-28 12:37:48                              *
 * @LastEditors           : adolnb<loro.lorenzonunez@gmail.com>              *
 * @LastEditDate          : 2025-11-28 15:32:04                              *
 * @FilePath              : conductor.service.ts                             *
 * @CopyRight             : © 2025 Adonai LN - B0MB0                         *
 ****************************************************************************/

import { api } from "@/services/api";


const getConductors = async () => {
    const res = await api.get("/conductors/list");
    return res;
};

const createConductor = async (data: FormData) => {
    const res = await api.postForm("/conductors/add", data);
    return res;
};

const updateConductor = async (id: string, data: FormData) => {
    const res = await api.putForm(`/conductors/${id}`, data);
    return res;
};

const deleteConductor = async (id: string) => {
    const res = await api.delete(`/conductors/${id}`);
    return res;
};

export const conductorService = { getConductors, createConductor, updateConductor, deleteConductor };
