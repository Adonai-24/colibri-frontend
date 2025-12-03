/*****************************************************************************
 * @Author                : adolnb<loro.lorenzonunez@gmail.com>              *
 * @CreatedDate           : 2025-11-20 22:29:02                              *
 * @LastEditors           : adolnb<loro.lorenzonunez@gmail.com>              *
 * @LastEditDate          : 2025-11-20 22:59:02                              *
 * @FilePath              : not-found.tsx                                    *
 * @CopyRight             : © 2025 Adonai LN - B0MB0                         *
 ****************************************************************************/

"use client";
import Link from "next/link";
import FooterComponent from "@/components/layout/Footer";


export default function NotFoundPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center bg-[var(--background)] text-[var(--text-primary)] px-4">
        <h1 className="text-6xl md:text-8xl mb-4 text-title text-[var(--primary)]">404</h1>
        <p className="text-lg text-center text-note mb-6">Ups… esta página no existe. Pero no se preocupe, puede regresar al inicio y continuar con sus tareas.</p>
        <Link href="/principal/inicio" className="px-6 py-3 bg-[var(--primary)] text-white text-body rounded-md hover:bg-[var(--border-hover)] transition-colors">Volver al inicio</Link>
      </div>

      <FooterComponent />
    </main>
  );
};
