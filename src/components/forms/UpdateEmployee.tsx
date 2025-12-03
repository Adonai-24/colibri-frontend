/*****************************************************************************
 * @Author                : adolnb<loro.lorenzonunez@gmail.com>              *
 * @CreatedDate           : 2025-11-26 14:13:46                              *
 * @LastEditors           : adolnb<loro.lorenzonunez@gmail.com>              *
 * @LastEditDate          : 2025-11-28 04:34:59                              *
 * @FilePath              : UpdateEmployee.tsx                               *
 * @CopyRight             : © 2025 Adonai LN - B0MB0                         *
 ****************************************************************************/

import * as React from "react";
import InputComponent from "../ui/Input";
import { utils } from "@/utils";
import { useEmployee } from "@/hooks/useEmployee";
import { Employee } from "@/types/User";
import Image from "next/image";


export const UpdateEmployee = React.forwardRef<HTMLFormElement, { onSuccess: (emp: any) => void, employee?: Employee }>(({ onSuccess, employee }, ref) => {
    const { errors, roles, setEditEmployee, updateEmployee, name, setName, email, setEmail, phone, setPhone, rol, setRol, file, setFile, preview, setPreview } = useEmployee();
    const id = employee?._id ? employee?._id : "";
    
    React.useEffect(() => {
        setEditEmployee(employee);
        
        if (employee?.photo) setPreview(null);
    }, [employee]);

    return (
        <form ref={ref} onSubmit={(e) => updateEmployee(e, id, onSuccess)} className="flex flex-col">
            <InputComponent id="name" type="text" value={name} placeholder="ERWIN JAVIER MARTINEZ MORALES" onChange={(e) => setName(utils.formatters.inputs.toUpperClean(e.target.value))} error={errors.name} label="Nombre completo*" />

            <InputComponent id="email" type="email" value={email} placeholder="erwin.admin@colibri.com" onChange={(e) => setEmail(e.target.value)} error={errors.email} label="Correo Electrónico*" />
            
            <InputComponent id="phone" type="text" value={phone} placeholder="442 566 2485" onChange={(e) => setPhone(utils.formatters.inputs.formatPhone(e.target.value))} error={errors.phone} label="Teléfono Móvil*" />

            <InputComponent id="rol" type="select" value={rol} placeholder="Selecciona un cargo*" onChange={(e) => setRol(e.target.value)} error={errors.rol} label="Cargo*" select={roles} />

            {(preview || employee?.photo) && (
                <div className="flex justify-center mb-2">
                    <Image src={preview || employee!.photo!} alt="Foto del empleado" width={150} height={150} className="object-cover w-[150px] h-[150px]" />
                </div>
            )}

            <InputComponent id="photo" type="file" onChange={(e) => {
                const target = e.target as HTMLInputElement;
                const selectedFile = target.files?.[0] || null;
                setFile(selectedFile);
            
                if (selectedFile) {
                    const reader = new FileReader();
                    reader.onloadend = () => setPreview(reader.result as string);
                    reader.readAsDataURL(selectedFile);
                } else {
                    setPreview(null);
                }
            }} error={errors.file} label="Foto"/>
        </form>
  );
});
