/*****************************************************************************
 * @Author                : adolnb<loro.lorenzonunez@gmail.com>              *
 * @CreatedDate           : 2025-11-20 22:51:01                              *
 * @LastEditors           : adolnb<loro.lorenzonunez@gmail.com>              *
 * @LastEditDate          : 2025-11-20 23:12:49                              *
 * @FilePath              : Footer.tsx                                       *
 * @CopyRight             : © 2025 Adonai LN - B0MB0                         *
 ****************************************************************************/

"use client";


export default function FooterComponent() {
    return (
        <footer className="mt-auto py-4 text-center text-body text-[var(--light)] bg-[var(--primary)]">
            <p>
                <a href="https://arroyoseco.gob.mx/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Gobierno Municipal de Arroyo Seco, Querétaro.
                </a>
            </p>
            <p>Derechos Reservados &copy; 2025 Colibri.</p>
        </footer>
    );
};
