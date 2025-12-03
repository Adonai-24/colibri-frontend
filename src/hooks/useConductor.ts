/*****************************************************************************
 * @Author                : adolnb<loro.lorenzonunez@gmail.com>              *
 * @CreatedDate           : 2025-11-20 09:23:32                              *
 * @LastEditors           : adolnb<loro.lorenzonunez@gmail.com>              *
 * @LastEditDate          : 2025-11-28 15:33:30                              *
 * @FilePath              : useConductor.ts                                  *
 * @CopyRight             : © 2025 Adonai LN - B0MB0                         *
 ****************************************************************************/

import * as React from "react";
import { Conductor } from "@/types/User";
import { conductorService } from "@/services/conductor.service";
import { useToastStore } from "@/store/toast.store";
import { useLoadingStore } from "@/store/loading.store";
import { utils } from "@/utils";
import { ENV } from "@/constants/constants";


export const useConductor = () => {
    const { show }= useToastStore();
    const { start } = useLoadingStore();

    const [conductors, setConductors] = React.useState<Conductor[]>([]);
    const [loading, setLoading] = React.useState(true);

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [photo, setPhoto] = React.useState<File | null>(null);
    const [ine, setIne] = React.useState<File | null>(null);
    const [licencia, setLicencia] = React.useState<File | null>(null);
    const [acta, setActa] = React.useState<File | null>(null);
    
    const [previewPhoto, setPreviewPhoto] = React.useState<string | null>(null);
    const [errors, setErrors] = React.useState<{ name?: string; email?: string; phone?: string; password?: string; photo?: string; documents?: { ine?: string; licencia?: string; acta?: string; }}>({});
    

    const fetchConductors = async () => {
        setLoading(true);
        try {
            const data = await conductorService.getConductors();
            const formatted = data.conductors.map((cond: any) => ({
                ...cond,
                phone: utils.formatters.phone(cond.phone)
            }));
            
            setTimeout(() => {
                setConductors(formatted);
                setLoading(false);
            }, 350);
        } catch (err: any) {
            show("Error: " + err.message, "error");
            setLoading(false);
        }
    };

    const addConductor = async (e: React.FormEvent, onSuccess?: (cond: Conductor) => void) => {
        e.preventDefault();

        const newErrors = utils.validators.conductor.validateCreateConductor(name, email, phone, password, photo, { ine, licencia, acta });
        
        const hasErrors = (err: any): boolean => {
            return Object.values(err).some(val => val !== undefined && val !== null && (typeof val === "object" ? hasErrors(val) : true));
        };
        
        if (hasErrors(newErrors)) return;

        const stopLoader = start("Validando datos...");
        let data;

        try {
            const f = new FormData();
            f.append("name", name);
            f.append("email", email);
            f.append("phone", phone.replace(/\D/g, ""));
            f.append("rol", "conductor");
            f.append("password", password);
            f.append("provider", ENV.PROVIDER!);

            if (photo) f.append("photo", photo);
            if (ine) f.append("ine", ine);
            if (licencia) f.append("licencia", licencia);
            if (acta) f.append("acta", acta);

            data = await conductorService.createConductor(f);
        } catch (err: any) {
            await stopLoader();
            show("Error: " + err.message, "error");
            return;
        }

        await stopLoader();
        setConductors(prev => [data.conductor, ...prev]);
        show(data.message, "success");
        if (onSuccess) onSuccess({ ...data.conductor, phone: utils.formatters.phone(data.conductor.phone) });
    };

    const setEditConductor = (cond?: Conductor) => {
        if (cond) {
            setName(cond.name);
            setEmail(cond.email);
            setPhone(cond.phone ? utils.formatters.inputs.formatPhone(cond.phone) : "");
            setPhoto(null);
            setPreviewPhoto(cond.photo || null);
        } else {
            setName("");
            setEmail("");
            setPhone("");
            setPhoto(null);
            setPreviewPhoto(null);
        }
    };

    const updateConductor = async (e: React.FormEvent, id: string, onSuccess?: (cond: Conductor) => void) => {
        e.preventDefault();

        const newErrors = utils.validators.conductor.validateUpdateConductor(email, phone, photo);
        setErrors(newErrors);

        const hasErrors = (err: any): boolean => {
            return Object.values(err).some(val => val !== undefined && val !== null && (typeof val === "object" ? hasErrors(val) : true));
        };

        if (hasErrors(newErrors)) return;

        const stopLoader = start("Actualizando datos...");
        let data;

        try {
            const formData = new FormData();
            formData.append("email", email);
            formData.append("phone", phone.replace(/\D/g, ""));
            if (photo) formData.append("photo", photo);

            data = await conductorService.updateConductor(id, formData);
        } catch (err: any) {
            await stopLoader();
            show("Error: " + err.message, "error");
            return;
        }

        await stopLoader();
        setConductors(prev => prev.map(e => e._id === data.conductor._id ? { ...data.conductor, phone: utils.formatters.phone(data.conductor.phone) } : e));
        show(data.message, "success");
        if (onSuccess) onSuccess({ ...data.conductor, phone: utils.formatters.phone(data.conductor.phone) });
    };

    const deleteConductor = async (id: string) => {
        let data;
        const stopLoader = start("Desactivando conductor...");

        try {
            data = await conductorService.deleteConductor(id);
        } catch (err: any) {
            await stopLoader();
            show("Error: " + err.message, "error");
            return;
        }

        await stopLoader();
        setConductors(prev => prev.filter(cond => cond._id !== id));
        show(data.message, "success");
    };
    
    React.useEffect(() => {
        fetchConductors();
    }, []);
    
    return {
        loading,
        errors,
        
        conductors,
        setConductors,
        name,
        setName,
        email,
        setEmail,
        phone,
        setPhone,
        password,
        setPassword,
        photo,
        setPhoto,
        ine,
        setIne,
        licencia,
        setLicencia,
        acta,
        setActa,
        previewPhoto,
        setPreviewPhoto,
        setEditConductor,

        fetchConductors,
        addConductor,
        updateConductor,
        deleteConductor,
    };
};
