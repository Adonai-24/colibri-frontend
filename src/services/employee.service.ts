/*****************************************************************************
 * @Author                : adolnb<loro.lorenzonunez@gmail.com>              *
 * @CreatedDate           : 2025-11-20 09:18:25                              *
 * @LastEditors           : adolnb<loro.lorenzonunez@gmail.com>              *
 * @LastEditDate          : 2025-11-26 14:50:38                              *
 * @FilePath              : employee.service.ts                              *
 * @CopyRight             : © 2025 Adonai LN - B0MB0                         *
 ****************************************************************************/

import { api } from "@/services/api";


const getEmployees = async (id?: string) => {
    const res = await api.post("/employees/list", { id });
    return res;
};

const createEmployee = async (data: FormData) => {
    const res = await api.postForm("/employees/add", data);
    return res;
};

const updateEmployee = async (id: string, data: FormData) => {
    const res = await api.putForm(`/employees/${id}`, data);
    return res;
};

const deleteEmployee = async (id: string) => {
    const res = await api.delete(`/employees/${id}`);
    return res;
};


export const employeeService = { getEmployees, createEmployee, updateEmployee, deleteEmployee };
