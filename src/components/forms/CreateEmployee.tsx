/*****************************************************************************
 * @Author                : adolnb<loro.lorenzonunez@gmail.com>              *
 * @CreatedDate           : 2025-11-24 02:34:43                              *
 * @LastEditors           : adolnb<loro.lorenzonunez@gmail.com>              *
 * @LastEditDate          : 2025-11-28 04:34:47                              *
 * @FilePath              : CreateEmployee.tsx                               *
 * @CopyRight             : © 2025 Adonai LN - B0MB0                         *
 ****************************************************************************/

import * as React from "react";
import Image from "next/image";
import InputComponent from "../ui/Input";
import { utils } from "@/utils";
import { useEmployee } from "@/hooks/useEmployee";


export const CreateEmployee = React.forwardRef<HTMLFormElement, { onSuccess: (emp: any) => void }>(({ onSuccess }, ref) => {
    const { errors, roles, addEmployee, name, setName, email, setEmail, phone, setPhone, rol, setRol, password, setPassword, file, setFile, preview, setPreview } = useEmployee();

    return (
        <form ref={ref} onSubmit={(e) => addEmployee(e, onSuccess)} className="flex flex-col">
            <InputComponent id="name" type="text" value={name} placeholder="ERWIN JAVIER MARTINEZ MORALES" onChange={(e) => setName(utils.formatters.inputs.toUpperClean(e.target.value))} error={errors.name} label="Nombre completo*" />

            <InputComponent id="email" type="email" value={email} placeholder="erwin.admin@colibri.com" onChange={(e) => setEmail(e.target.value)} error={errors.email} label="Correo Electrónico*" />
            
            <InputComponent id="phone" type="text" value={phone} placeholder="52 442 566 2485" onChange={(e) => setPhone(utils.formatters.inputs.formatPhone(e.target.value))} error={errors.phone} label="Teléfono Móvil*" />

            <InputComponent id="rol" type="select" value={rol} placeholder="Selecciona un cargo*" onChange={(e) => setRol(e.target.value)} error={errors.rol} label="Cargo*" select={roles} />
            
            <InputComponent id="password" type="password" value={password} placeholder="***********" onChange={(e) => setPassword(e.target.value)} error={errors.password} label="Contraseña*" />

            {preview && (
                <div className="flex justify-center">
                    <Image src={preview} alt="Preview" className="object-cover mb-2" width={150} height={150} />
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
