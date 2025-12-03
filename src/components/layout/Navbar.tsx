/*****************************************************************************
 * @Author                : adolnb<loro.lorenzonunez@gmail.com>              *
 * @CreatedDate           : 2025-11-20 05:12:53                              *
 * @LastEditors           : adolnb<loro.lorenzonunez@gmail.com>              *
 * @LastEditDate          : 2025-11-28 18:31:32                              *
 * @FilePath              : Navbar.tsx                                       *
 * @CopyRight             : © 2025 Adonai LN - B0MB0                         *
 ****************************************************************************/


"use client";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/constants/images";
import { useNavbar } from "@/hooks/useNavbar";


export default function NavbarComponent() {
    // const { user, isAdmin, isActive, isDropdownOpen, setDropdownOpen, handleLogout, } = useNavbar();
    const { user, isActive, isDropdownOpen, setDropdownOpen, handleLogout, } = useNavbar();

    return (
        <nav className="w-full bg-[var(--light)] shadow-md border-b border-[var(--divider)] py-2">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link href="/principal/inicio" className="flex items-center gap-2">
                        <Image src={images.logos.roadColibri} alt="Colibri Logo" width={45} height={45} className="object-contain" />
                        <span className="text-title text-[var(--primary)] text-lg md:text-xl">Colibri</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-6">
                        <Link href="/principal/inicio" className={`text-body transition-colors ${isActive("/principal/inicio") ? "text-[var(--primary)] font-semibold" : "text-[var(--text-primary)] hover:text-[var(--primary)]"}`}>Inicio</Link>
                        {/* {isAdmin && ( */}
                        <Link href="/principal/empleados" className={`text-body transition-colors ${isActive("/principal/empleados") ? "text-[var(--primary)] font-semibold" : "text-[var(--text-primary)] hover:text-[var(--primary)]"}`}>Empleados</Link>
                        {/* )} */}
                        {/* <Link href="/principal/vehiculos" className={`text-body transition-colors ${isActive("/principal/vehiculos") ? "text-[var(--primary)] font-semibold" : "text-[var(--text-primary)] hover:text-[var(--primary)]"}`}>Vehículos</Link> */}
                        <Link href="/principal/conductores" className={`text-body transition-colors ${isActive("/principal/conductores") ? "text-[var(--primary)] font-semibold" : "text-[var(--text-primary)] hover:text-[var(--primary)]"}`}>Conductores</Link>
                        {/* <Link href="/about" className={`text-body transition-colors ${isActive("/about") ? "text-[var(--primary)] font-semibold" : "text-[var(--text-primary)] hover:text-[var(--primary)]"}`}>Nosotros</Link> */}
                        {/* <Link href="/contact" className={`text-body transition-colors ${isActive("/contact") ? "text-[var(--primary)] font-semibold" : "text-[var(--text-primary)] hover:text-[var(--primary)]"}`}>Contacto</Link> */}
                    </div>
                    
                    <div className="hidden md:flex items-center relative">
                        <button className="flex items-center gap-2 focus:outline-none" onClick={() => setDropdownOpen(!isDropdownOpen)}>
                            <Image src={user?.photo ?? images.avatars.user} alt="Avatar Usuario" width={32} height={32} className="rounded-full object-cover w-[32px] h-[32px]" />
                            <span className="text-body text-[var(--text-primary)]">{user?.name}</span>
                            <svg className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : "rotate-0"}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute right-0 top-full w-48 bg-[var(--light)] border border-[var(--divider)] rounded-lg shadow-lg z-10">
                                <div className="px-4 py-3 border-b border-[var(--divider)]">
                                    <p className="text-sm font-semibold text-[var(--text-primary)]">{user?.name}</p>
                                    <p className="text-xs text-[var(--text-secondary)] truncate">{user?.email}</p>
                                </div>
                                <ul className="flex flex-col">
                                    <li>
                                        <Link href="/profile" className="block px-4 py-2 text-sm text-[var(--text-primary)] hover:bg-[var(--border-hover)]">Editar perfil</Link>
                                    </li>
                                    <li>
                                        <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm text-[var(--text-primary)] hover:bg-[var(--border-hover)]">Cerrar sesión</button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className="md:hidden">
                        <button className="text-[var(--text-primary)] focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};
