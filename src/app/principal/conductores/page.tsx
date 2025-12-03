/*****************************************************************************
 * @Author                : adolnb<loro.lorenzonunez@gmail.com>              *
 * @CreatedDate           : 2025-11-28 00:56:49                              *
 * @LastEditors           : adolnb<loro.lorenzonunez@gmail.com>              *
 * @LastEditDate          : 2025-11-28 15:34:04                              *
 * @FilePath              : page.tsx                                         *
 * @CopyRight             : © 2025 Adonai LN - B0MB0                         *
 ****************************************************************************/

"use client";
import * as React from 'react';
import Image from 'next/image';
import NavbarComponent from '@/components/layout/Navbar';
import { images } from '@/constants/images';
import { useConductor } from '@/hooks/useConductor';
import FooterComponent from '@/components/layout/Footer';
import ButtonComponent from '@/components/ui/Button';
import ModalComponent from '@/components/ui/Modal';
import { useModal } from '@/hooks/useModal';
import { CreateConductor } from '@/components/forms/CreateConductor';
import { UpdateConductor } from '@/components/forms/UpdateConductor';


export default function ConductorsPage() {
    const { conductors, setConductors, loading, deleteConductor } = useConductor();
    const { modalState, openModal, closeModal } = useModal();
    const formRef = React.useRef<HTMLFormElement>(null);
    
    return (
        <main className='min-h-screen flex flex-col'>
            <NavbarComponent />
            <div className='py-8 px-15 my-5'>
                <div className='flex justify-between items-center mb-6'>
                    <h1 className="text-title text-[var(--primary)] text-xl md:text-2xl lg:text-3xl">Conductores Disponibles</h1>
                    <ButtonComponent className='flex justify-between items-center gap-2' variant="primary" onClick={() => openModal({
                        title: "Registrar Conductor",
                        size: "lg",
                        children: (
                            <CreateConductor ref={formRef} onSuccess={(cond: any) => {
                                setConductors((prev: any) => [cond, ...prev]);
                                closeModal();
                            }}/>
                        ),
                        onConfirm: () => {
                            formRef.current?.requestSubmit();
                        },
                    })}>
                        <Image src={images.icons.add} alt='Add Icon' width={20} height={20} className="object-cover" />
                        Añadir Conductor
                    </ButtonComponent>
                </div>
                <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                    <table className="min-w-full divide-y divide-[var(--divider)] text-sm">
                        <thead className="bg-[var(--primary)] text-white">
                            <tr>
                                <th className="px-4 py-3 text-left">Foto</th>
                                <th className="px-4 py-3 text-left">Nombre</th>
                                <th className="px-4 py-3 text-left">Correo</th>
                                <th className="px-4 py-3 text-left">Teléfono</th>
                                <th className="px-4 py-3 text-left">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[var(--divider)] border border-[var(--border-hover)]">
                            
                            {loading && (
                                [...Array(15)].map((_, i) => (
                                    <tr key={i} className="animate-pulse">
                                        <td className="py-3 px-4">
                                            <div className="h-4 w-32 bg-[var(--divider)] rounded"></div>
                                        </td>
                                        <td className="py-3 px-4">
                                            <div className="h-4 w-28 bg-[var(--divider)] rounded"></div>
                                        </td>
                                        <td className="py-3 px-4">
                                            <div className="h-4 w-20 bg-[var(--divider)] rounded"></div>
                                        </td>
                                        <td className="py-3 px-4">
                                            <div className="h-4 w-16 bg-[var(--divider)] rounded"></div>
                                        </td>
                                        <td className="py-3 px-4">
                                            <div className="h-4 w-10 bg-[var(--divider)] rounded"></div>
                                        </td>
                                    </tr>
                                ))
                            )}

                            {!loading && conductors.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="text-center py-4">No hay conductores disponibles.</td>
                                </tr>
                            )}

                            {!loading && conductors.length > 0 && (conductors.map(cond => (
                                <tr key={cond._id}>
                                    <td className="px-4 py-3">
                                        <Image src={cond.photo || images.avatars.user} alt={cond.name} width={45} height={45} className="rounded-full object-cover w-[45px] h-[45px]" />
                                    </td>
                                    <td className="px-4 py-3">{cond.name}</td>
                                    <td className="px-4 py-3">{cond.email}</td>
                                    <td className="px-4 py-3">{cond.phone}</td>
                                    <td className="flex px-4 py-3 gap-2">
                                        <ButtonComponent variant='secondary' color='#EDC911' onClick={() => openModal({
                                            title: `Editar Conductor - ${cond.name}`,
                                            size: "lg",
                                            children: (
                                                <UpdateConductor ref={formRef} conductor={cond} onSuccess={(updated: any) => {
                                                    setConductors(prev => prev.map(e => e._id === updated._id ? updated : e));
                                                    closeModal();
                                                }}/>
                                            ),
                                            onConfirm: () => {
                                                formRef.current?.requestSubmit();
                                            },
                                        })}>
                                            <Image src={images.icons.edit} alt='Pencil Icon' width={20} height={20} className="object-cover" />
                                        </ButtonComponent>
                                        <ButtonComponent variant='secondary' color='var(--error)' onClick={() => openModal({
                                            title: "Eliminar Conductor",
                                            size: "sm",
                                            children: (
                                                <p>¿Seguro que deseas dar de baja al conductor <strong>{cond.name}</strong>?</p>
                                            ),
                                            onConfirm: async () => {
                                                await deleteConductor(cond._id || "");
                                                closeModal();
                                            },
                                        })}>
                                            <Image src={images.icons.delete} alt='Trash Icon' width={20} height={20} className="object-cover" />
                                        </ButtonComponent>
                                    </td>
                                </tr>
                            )))}
                        </tbody>
                    </table>
                </div>
            </div>

            <FooterComponent />

            <ModalComponent {...modalState} />
        </main>
    )
};
