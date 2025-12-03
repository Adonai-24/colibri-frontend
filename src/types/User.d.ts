/*****************************************************************************
 * @Author                : adolnb<loro.lorenzonunez@gmail.com>              *
 * @CreatedDate           : 2025-11-20 05:27:48                              *
 * @LastEditors           : adolnb<loro.lorenzonunez@gmail.com>              *
 * @LastEditDate          : 2025-11-28 15:26:10                              *
 * @FilePath              : User.d.ts                                        *
 * @CopyRight             : © 2025 Adonai LN - B0MB0                         *
 ****************************************************************************/

interface User {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  photo: string | null;
  rol: string;
};

export type UserType = {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
};

export interface Employee {
  _id?: string;
  name: string;
  password?: string;
  email: string;
  phone?: string;
  photo?: string;
  rol: string;
  provider?: string;
  status?: number;
};

export interface ConductorDocuments {
  ine?: string;
  licencia?: string;
  acta?: string;
};

export interface Conductor {
  _id?: string;
  name: string;
  email: string;
  phone: string;
  rol: string;
  password?: string;
  provider?: string;  
  photo?: string;
  documents?: ConductorDocuments;
  status?: number;
};
