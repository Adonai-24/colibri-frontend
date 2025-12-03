/******************************************************************************
 * @Author                : adolnb<loro.lorenzonunez@gmail.com>               *
 * @CreatedDate           : 2025-11-10 09:11:57                               *
 * @LastEditors           : adolnb<loro.lorenzonunez@gmail.com>               *
 * @LastEditDate          : 2025-11-23 11:00:16                               *
 * @FilePath              : page.tsx                                          *
 * @CopyRight             : © 2025 Adonai LN - B0MB0                          *
 *****************************************************************************/

"use client";
import Image from "next/image";
import InputComponent from "@/components/ui/Input";
import ButtonComponent from "@/components/ui/Button";
import { images } from "@/constants/images";
import { useLogin } from "@/hooks/useLogin";


export default function Main() {
  const { email, password, errors, setEmail, setPassword, handleLogin } = useLogin();

  return (
    <main className="flex flex-1 min-h-screen items-center justify-center p-4 md:p-6 lg:p-8">
      <div className="flex-grow flex flex-col justify-center items-center w-full">
        <Image src={images.logos.roadColibri} alt="Colibri Logo" width={125} height={125} className="mb-0 object-contain" priority />
        <h1 className="text-title text-[var(--primary)] text-xl md:text-2xl lg:text-3xl">
          inicio de sesión
        </h1>
        <p className="text-subtitle text-center text-[var(--text-primary)] text-base md:text-lg mb-4 md:mb-6 lg:mb-8">
          panel administrativo colibri
        </p>
        <form onSubmit={handleLogin} className="w-full max-w-md bg-[var(--light)] rounded-xl shadow-xl flex flex-col items-center border border-[var(--border-hover)] p-4 md:p-6 lg:p-8">
          <InputComponent id="email" type="email" value={email} placeholder="erwin.admin@colibri.com" onChange={(e) => setEmail(e.target.value)} error={errors.email} label="Correo Electrónico*" />
          <InputComponent id="password" type="password" value={password} placeholder="**********" onChange={(e) => setPassword(e.target.value)} error={errors.password} label="Contraseña*" />
          <div className="w-11/12 flex flex-col gap-2 mt-2 md:mt-3 lg:mt-4">
            <ButtonComponent type="submit" variant="primary">Acceder al sistema</ButtonComponent>
          </div>
        </form>
      </div>
    </main>
  );
};
