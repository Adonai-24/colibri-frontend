/*****************************************************************************
 * @Author                : adolnb<loro.lorenzonunez@gmail.com>              *
 * @CreatedDate           : 2025-11-20 06:16:31                              *
 * @LastEditors           : adolnb<loro.lorenzonunez@gmail.com>              *
 * @LastEditDate          : 2025-11-28 13:56:10                              *
 * @FilePath              : page.tsx                                         *
 * @CopyRight             : © 2025 Adonai LN - B0MB0                         *
 ****************************************************************************/

"use client";
import * as React from 'react';
import Image from 'next/image';
import NavbarComponent from '@/components/layout/Navbar';
import { images } from '@/constants/images';
import { useEmployee } from '@/hooks/useEmployee';
import FooterComponent from '@/components/layout/Footer';
import ButtonComponent from '@/components/ui/Button';
import ModalComponent from '@/components/ui/Modal';
import { useModal } from '@/hooks/useModal';
import { CreateEmployee } from '@/components/forms/CreateEmployee';
import { UpdateEmployee } from '@/components/forms/UpdateEmployee';


export default function EmployeesPage() {
    const { employees, setEmployees, loading, deleteEmployee } = useEmployee();
    const { modalState, openModal, closeModal } = useModal();
    const formRef = React.useRef<HTMLFormElement>(null);
    
    return (
        <main className='min-h-screen flex flex-col'>
            <NavbarComponent />
            <div className='py-8 px-15 my-5'>
                <div className='flex justify-between items-center mb-6'>
                    <h1 className="text-title text-[var(--primary)] text-xl md:text-2xl lg:text-3xl">Personal Disponible</h1>
                    <ButtonComponent className='flex justify-between items-center gap-2' variant="primary" onClick={() => openModal({
                        title: "Registrar Empleado",
                        size: "lg",
                        children: (
                            <CreateEmployee ref={formRef} onSuccess={(emp: any) => {
                                setEmployees(prev => [emp, ...prev]);
                                closeModal();
                            }}/>
                        ),
                        onConfirm: () => {
                            formRef.current?.requestSubmit();
                        },
                    })}>
                        <Image src={images.icons.add} alt='Add Icon' width={20} height={20} className="object-cover" />
                        Crear Usuario
                    </ButtonComponent>
                </div>
                <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                    <table className="min-w-full divide-y divide-[var(--divider)] text-sm">
                        <thead className="bg-[var(--primary)] text-white">
                            <tr>
                                <th className="px-4 py-3 text-left">Foto</th>
                                <th className="px-4 py-3 text-left">Nombre</th>
                                <th className="px-4 py-3 text-left">Correo Electrónico</th>
                                <th className="px-4 py-3 text-left">Teléfono</th>
                                <th className="px-4 py-3 text-left">Cargo</th>
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
                                        <td className="py-3 px-4">
                                            <div className="h-4 w-10 bg-[var(--divider)] rounded"></div>
                                        </td>
                                    </tr>
                                ))
                            )}

                            {!loading && employees.length === 0 && (
                                <tr>
                                    <td colSpan={6} className="text-center py-4">No hay empleados disponibles.</td>
                                </tr>
                            )}

                            {!loading && employees.length > 0 && (employees.map(emp => (
                                <tr key={emp._id}>
                                    <td className="px-4 py-3">
                                        <Image src={emp.photo || images.avatars.user} alt={emp.name} width={45} height={45} className="rounded-full object-cover w-[45px] h-[45px]" />
                                    </td>
                                    <td className="px-4 py-3">{emp.name}</td>
                                    <td className="px-4 py-3">{emp.email}</td>
                                    <td className="px-4 py-3">{emp.phone}</td>
                                    <td className="px-4 py-3 capitalize">{emp.rol}</td>
                                    <td className="flex px-4 py-3 gap-2">
                                        <ButtonComponent variant='secondary' color='#EDC911' onClick={() => openModal({
                                            title: `Editar Empleado - ${emp.name}`,
                                            size: "lg",
                                            children: (
                                                <UpdateEmployee ref={formRef} employee={emp} onSuccess={(updated: any) => {
                                                    setEmployees(prev => prev.map(e => e._id === updated._id ? updated : e));
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
                                            title: "Eliminar Empleado",
                                            size: "sm",
                                            children: (
                                                <p>¿Seguro que deseas dar de baja al empleado <strong>{emp.name}</strong>?</p>
                                            ),
                                            onConfirm: async () => {
                                                await deleteEmployee(emp._id || "");
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
