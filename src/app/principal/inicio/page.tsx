/*****************************************************************************
 * @Author                : adolnb<loro.lorenzonunez@gmail.com>              *
 * @CreatedDate           : 2025-11-20 06:24:29                              *
 * @LastEditors           : adolnb<loro.lorenzonunez@gmail.com>              *
 * @LastEditDate          : 2025-11-23 10:14:27                              *
 * @FilePath              : page.tsx                                         *
 * @CopyRight             : © 2025 Adonai LN - B0MB0                         *
 ****************************************************************************/

"use client";
import Image from "next/image";
import { images } from "@/constants/images";
import NavbarComponent from "@/components/layout/Navbar";
import FooterComponent from "@/components/layout/Footer";

export default function PrincipalPage() {
    const stats = [
        { id: 1, title: "Empleados", value: 12, icon: images.icons.employees },
        { id: 2, title: "Vehículos", value: 8, icon: images.icons.car },
        { id: 4, title: "Alertas", value: 2, icon: images.icons.alert },
    ];

    const quickLinks = [
        { id: 1, title: "Gestionar Empleados", icon: images.icons.employees, href: "/principal/empleados" },
        { id: 2, title: "Gestionar Vehículos", icon: images.icons.car, href: "/principal/vehiculos" },
        { id: 3, title: "Ver Reportes", icon: images.icons.report, href: "/principal/reportes" },
    ];

    return (
        <main className="min-h-screen flex flex-col">
            <NavbarComponent />
            <div className='py-8 px-15 my-5'>
                <h1 className="text-title text-[var(--primary)] text-xl md:text-2xl lg:text-3xl mb-4">Bienvenido de nuevo a la plataforma Colibri</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    {stats.map((stat) => (
                        <div key={stat.id} className="bg-[var(--light)] shadow-md border-b border-[var(--border-hover)] rounded-lg p-4 flex items-center">
                            <Image src={stat.icon} alt={stat.title} width={40} height={40} className="mr-4" />
                            <div>
                                <p className="text-sm text-[var(--text-secondary)]">{stat.title}</p>
                                <p className="text-xl text-[var(--text-primary)]">{stat.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <h2 className="text-lg font-semibold text-[var(--primary)] mb-4">Accesos rápidos</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {quickLinks.map((link) => (
                        <a key={link.id} href={link.href} className="bg-[var(--light)] shadow border-b border-[var(--border-hover)] rounded-lg p-6 flex flex-col items-center justify-center hover:bg-[var(--border-hover)] transition">
                            <Image src={link.icon} alt={link.title} width={50} height={50} className="mb-3" />
                            <p className="text-[var(--text-primary)] font-medium">{link.title}</p>
                        </a>
                    ))}
                </div>
            </div>

            <FooterComponent />
        </main>
    );
};
