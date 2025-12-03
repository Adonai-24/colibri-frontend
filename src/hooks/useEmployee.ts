/*****************************************************************************
 * @Author                : adolnb<loro.lorenzonunez@gmail.com>              *
 * @CreatedDate           : 2025-11-20 09:23:32                              *
 * @LastEditors           : adolnb<loro.lorenzonunez@gmail.com>              *
 * @LastEditDate          : 2025-11-28 04:33:35                              *
 * @FilePath              : useEmployee.ts                                   *
 * @CopyRight             : © 2025 Adonai LN - B0MB0                         *
 ****************************************************************************/

import * as React from "react";
import { Employee } from "@/types/User";
import { employeeService } from "@/services/employee.service";
import { useUserStore } from "@/store/user.store";
import { useToastStore } from "@/store/toast.store";
import { useLoadingStore } from "@/store/loading.store";
import { utils } from "@/utils";
import { ENV } from "@/constants/constants";


export const useEmployee = () => {
    const { user } = useUserStore();
    const { show }= useToastStore();
    const { start } = useLoadingStore();

    const [employees, setEmployees] = React.useState<Employee[]>([]);
    const [loading, setLoading] = React.useState(true);

    const [name, setName] = React.useState<string>("");
    const [email, setEmail] = React.useState<string>("");
    const [phone, setPhone] = React.useState<string>("");
    const [rol, setRol] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const [file, setFile] = React.useState<File | null>(null);
    const [preview, setPreview] = React.useState<string | null>(null);
    const [errors, setErrors] = React.useState<{ email?: string; password?: string; name?: string; rol?: string; phone?: string; file?: string; }>({});
    
    const roles = [
        { label: "Administrador General", value: ENV.EMPLOYEE_ROL.ADMIN },
        { label: "Jefe de Transporte", value: ENV.EMPLOYEE_ROL.JEFE_TRANSPORTE },
        { label: "Auditor", value: ENV.EMPLOYEE_ROL.AUDITOR },
    ];

    const fetchEmployees = async () => {
        setLoading(true);
        try {
            const data = await employeeService.getEmployees(user?.id);
            const formatted = data.employees.map((emp: any) => ({
                ...emp,
                phone: utils.formatters.phone(emp.phone)
            }));
            
            setTimeout(() => {
                setEmployees(formatted);
                setLoading(false);
            }, 350);
        } catch (err: any) {
            show("Error: " + err.message, "error");
            setLoading(false);
        }
    };

    const addEmployee = async (e: React.FormEvent, onSuccess?: (emp: Employee) => void) => {
        e.preventDefault();

        const newErrors = utils.validators.employee.validateCreateEmployee(name, email, phone, rol, password, file);
        setErrors(newErrors);

        if (Object.values(newErrors).some(error => error !== undefined)) return;

        const stopLoader = start("Enviando datos...");
        let data;

        try {
            const cleanedPhone = phone.replace(/\D/g, "");

            const formData = new FormData();
            formData.append("name", name);
            formData.append("email", email);
            formData.append("phone", cleanedPhone);
            formData.append("rol", rol);
            formData.append("password", password);
            formData.append("provider", ENV.PROVIDER!);
            if (file) formData.append("photo", file);

            data = await employeeService.createEmployee(formData);
        } catch(err: any) {
            await stopLoader();
            show("Error: " + err.message, "error");
            return;
        }
        
        await stopLoader();
        setEmployees(prev => [data.employee, ...prev]);
        show(data.message, "success");
        if (onSuccess) onSuccess({ ...data.employee, phone: utils.formatters.phone(data.employee.phone) });
    };

    const setEditEmployee = (emp?: Employee) => {
        if(emp){
            setName(emp.name);
            setEmail(emp.email);
            setPhone(emp.phone ? utils.formatters.inputs.formatPhone(emp.phone) : "");
            setRol(emp.rol);
            setFile(null);
            setPreview(null);
        } else {
            setName("");
            setEmail("");
            setPhone("");
            setRol("");
            setFile(null);
            setPreview(null);
        }
    };
    
    const updateEmployee = async (e: React.FormEvent, id: string, onSuccess?: (emp: Employee) => void) => {
        e.preventDefault();

        const newErrors = utils.validators.employee.validateUpdateEmployee(name, email, phone, rol, file);
        setErrors(newErrors);

        if (Object.values(newErrors).some(error => error !== undefined)) return;

        const stopLoader = start("Actualizando datos...");
        let data;

        try {
            const cleanedPhone = phone.replace(/\D/g, "");

            const formData = new FormData();
            formData.append("name", name);
            formData.append("email", email);
            formData.append("phone", cleanedPhone);
            formData.append("rol", rol);
            if (file) formData.append("photo", file);

            data = await employeeService.updateEmployee(id, formData);
        } catch(err: any) {
            await stopLoader();
            show("Error: " + err.message, "error");
            return;
        }
        
        await stopLoader();
        setEmployees(prev => prev.map(e => e._id === data.employee._id ? { ...data.employee, phone: utils.formatters.phone(data.employee.phone) } : e));
        show(data.message, "success");
        if (onSuccess) onSuccess({ ...data.employee, phone: utils.formatters.phone(data.employee.phone) });
    };

    const deleteEmployee = async (id: string) => {
        let data;
        const stopLoader = start("Desactivando empleado...");

        try {
            data = await employeeService.deleteEmployee(id);
        } catch (err: any) {
            await stopLoader();
            show("Error: " + err.message, "error");
            return;
        }

        await stopLoader();
        setEmployees(prev => prev.filter(emp => emp._id !== id));
        show(data.message, "success");
    };
    
    React.useEffect(() => {
        if (!user?.id) return;
        fetchEmployees();
    }, [user?.id]);
    
    return {
        loading,
        errors,
        roles,
        
        employees,
        setEmployees,
        name,
        setName,
        email,
        setEmail,
        phone,
        setPhone,
        rol,
        setRol,
        password,
        setPassword,
        file,
        setFile,
        preview,
        setPreview,
        setEditEmployee,

        fetchEmployees,
        addEmployee,
        updateEmployee,
        deleteEmployee,
    };
};
