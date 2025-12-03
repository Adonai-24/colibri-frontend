/*****************************************************************************
 * @Author                : adolnb<loro.lorenzonunez@gmail.com>              *
 * @CreatedDate           : 2025-11-28 10:17:16                              *
 * @LastEditors           : adolnb<loro.lorenzonunez@gmail.com>              *
 * @LastEditDate          : 2025-11-28 15:00:27                              *
 * @FilePath              : CreateConductor.tsx                              *
 * @CopyRight             : © 2025 Adonai LN - B0MB0                         *
 ****************************************************************************/

"use client";
import * as React from "react";
import Image from "next/image";
import InputComponent from "../ui/Input";
import { useConductor } from "@/hooks/useConductor";
import { utils } from "@/utils";


export const CreateConductor = React.forwardRef<HTMLFormElement, { onSuccess: (cond: any) => void }>(({ onSuccess }, ref) => {
    const { errors, name, setName, email, setEmail, phone, setPhone, password, setPassword, setPhoto, setIne, setLicencia, setActa, previewPhoto, setPreviewPhoto, addConductor } = useConductor();

    return (
        <form ref={ref} onSubmit={(e) => addConductor(e, onSuccess)} className="flex flex-col">
            <InputComponent id="name" type="text" value={name} placeholder="ERWIN JAVIER MARTINEZ MORALES" onChange={(e) => setName(utils.formatters.inputs.toUpperClean(e.target.value))} error={errors.name} label="Nombre completo*" />
            
            <InputComponent id="email" type="email" value={email} placeholder="erwin.javier@gmail.com" onChange={(e) => setEmail(e.target.value)} error={errors.email} label="Correo Electrónico*" />
            
            <InputComponent id="phone" type="text" value={phone} placeholder="52 442 566 2485" onChange={(e) => setPhone(utils.formatters.inputs.formatPhone(e.target.value))} error={errors.phone} label="Teléfono Móvil*" />
            
            <InputComponent id="password" type="password" value={password} placeholder="***********" onChange={(e) => setPassword(e.target.value)} error={errors.password} label="Contraseña*" />

            {previewPhoto && (
                <div className="flex justify-center mb-3">
                    <Image src={previewPhoto} width={150} height={150} alt="Preview"
                        className="rounded object-cover" />
                </div>
            )}

            <InputComponent id="photo" type="file" onChange={(e) => {
                const target = e.target as HTMLInputElement;
                const f = target.files?.[0] || null;
                setPhoto(f);
                if (f) {
                    const reader = new FileReader();
                    reader.onloadend = () => setPreviewPhoto(reader.result as string);
                    reader.readAsDataURL(f);
                } else setPreviewPhoto(null);
            }} error={errors.photo} label="Foto"/>
            
            <InputComponent id="id" type="file" onChange={(e) => { const target = e.target as HTMLInputElement; const f = target.files?.[0] || null; setIne(f); }} error={errors.documents?.ine} label="INE*"/>
            
            <InputComponent id="license" type="file" onChange={(e) => { const target = e.target as HTMLInputElement; const f = target.files?.[0] || null; setLicencia(f); }} error={errors.documents?.licencia} label="Licencia*"/>
            
            <InputComponent id="birth_certified" type="file" onChange={(e) => { const target = e.target as HTMLInputElement; const f = target.files?.[0] || null; setActa(f); }} error={errors.documents?.acta} label="Acta de Nacimiento*"/>
        </form>
    );
});
