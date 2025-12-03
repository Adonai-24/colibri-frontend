/*****************************************************************************
 * @Author                : adolnb<loro.lorenzonunez@gmail.com>              *
 * @CreatedDate           : 2025-11-10 10:11:54                              *
 * @LastEditors           : adolnb<loro.lorenzonunez@gmail.com>              *
 * @LastEditDate          : 2025-11-20 06:18:33                              *
 * @FilePath              : page.tsx                                         *
 * @CopyRight             : © 2025 Adonai LN - B0MB0                         *
 ****************************************************************************/


















"use client";
import NavbarComponent from "@/components/layout/Navbar";
import { useEffect, useState } from "react";

export default function DriversPage() {
  const [drivers, setDrivers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/conductores`);
        const data = await res.json();
        if (data.success) setDrivers(data.data || data.conductores || []);
      } catch (error) {
        console.error("Error al obtener conductores:", error);  
      } finally {
        setLoading(false);
      }
    };
    fetchDrivers();
  }, []);

  if (loading) return <p className="text-gray-500 text-center mt-10">Cargando conductores...</p>;

  return (
    <>
      <NavbarComponent />
      <div className="p-6">
          <h1 className="font-[var(--font-title)] font-bold text-[var(--primary)] text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6 lg:mb-8">Conductores registrados</h1>

        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Foto</th>
                <th className="px-4 py-3 text-left">Nombre</th>
                <th className="px-4 py-3 text-left">Correo Electrónico</th>
                <th className="px-4 py-3 text-left">Teléfono</th>
                {/* <th className="px-4 py-3 text-left">Matrícula de Carro</th>
                <th className="px-4 py-3 text-left">Estado de Nacimiento</th> */}
                <th className="px-4 py-3 text-left">Acciones</th>
              </tr> 
            </thead>
            <tbody className="divide-y divide-gray-200">
              {drivers.map((driver) => (
                <tr key={driver._id}>
                  <td className="px-4 py-3">
                    <img
                      src={driver.photo || "/default-avatar.png"}
                      alt={driver.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </td>
                  <td className="px-4 py-3">{driver.name}</td>
                  <td className="px-4 py-3">{driver.email}</td>
                  <td className="px-4 py-3">{driver.phone}</td>
                  {/* <td className="px-4 py-3">{driver.carPlate || "—"}</td>
                  <td className="px-4 py-3">{driver.status}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
