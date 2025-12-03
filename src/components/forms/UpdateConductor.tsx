/*****************************************************************************
 * @Author                : adolnb<loro.lorenzonunez@gmail.com>              *
 * @CreatedDate           : 2025-11-28 15:01:14                              *
 * @LastEditors           : adolnb<loro.lorenzonunez@gmail.com>              *
 * @LastEditDate          : 2025-11-28 15:25:55                              *
 * @FilePath              : UpdateConductor.tsx                              *
 * @CopyRight             : © 2025 Adonai LN - B0MB0                         *
 ****************************************************************************/

import * as React from "react";
import InputComponent from "../ui/Input";
import { utils } from "@/utils";
import { useConductor } from "@/hooks/useConductor";
import { Conductor } from "@/types/User";
import Image from "next/image";


export const UpdateConductor = React.forwardRef<HTMLFormElement, { onSuccess: (cond: any) => void, conductor?: Conductor }>(({ onSuccess, conductor }, ref) => {
    const { errors, setEditConductor, updateConductor, email, setEmail, phone, setPhone, photo, setPhoto, previewPhoto, setPreviewPhoto } = useConductor();
    const id = conductor?._id ? conductor?._id : "";
    
    React.useEffect(() => {
        setEditConductor(conductor);
    }, [conductor]);

    return (
        <form ref={ref} onSubmit={(e) => updateConductor(e, id, onSuccess)} className="flex flex-col">        
            <InputComponent id="email" type="email" value={email} placeholder="erwin.javier@gmail.com" onChange={(e) => setEmail(e.target.value)} error={errors.email} label="Correo Electrónico*" />
            
            <InputComponent id="phone" type="text" value={phone} placeholder="52 442 566 2485" onChange={(e) => setPhone(utils.formatters.inputs.formatPhone(e.target.value))} error={errors.phone} label="Teléfono Móvil*" />

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
        </form>
  );
});
