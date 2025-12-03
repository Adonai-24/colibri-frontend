/*****************************************************************************
 * @Author                : adolnb<loro.lorenzonunez@gmail.com>              *
 * @CreatedDate           : 2025-11-28 04:27:49                              *
 * @LastEditors           : adolnb<loro.lorenzonunez@gmail.com>              *
 * @LastEditDate          : 2025-11-28 09:45:24                              *
 * @FilePath              : Vehicles.d.ts                                    *
 * @CopyRight             : © 2025 Adonai LN - B0MB0                         *
 ****************************************************************************/

export interface Vehicle {
    _id?: string;
    driverId?: string;
    plate: string;
    brand?: string;
    model?: string;
    year?: number;
    color?: string;
    vehicleType?: string;
    status?: number;
    characteristics: {
        passengerCapacity: number;
        fuelType: string;
        transmission: string;
        maxSpeed: number;
        wheelchairAccessible: boolean;
    };
};

// {
//   "driverId": ObjectId(),
//   "plate": "1234-XYZ",
//   "brand": "Mercedes",
//   "model": "Vito",
//   "year": 2021,
//   "color": "Blanco",
//   "vehicleType": "van", 
//   "status": 1,

//   "characteristics": {
//     "passengerCapacity": 8,
//     "fuelType": "diesel",
//     "transmission": "automatic",
//     "maxSpeed": 30,
//     "wheelchairAccessible": false,
//     "maintenance": {
//       "mileage": 85400,
//       "lastService": ISODate("2024-12-01"),
//       "notes": "Cambio de frenos reciente"
//     }
//   },

//   "createdAt": ISODate(),
//   "updatedAt": ISODate()
// }
