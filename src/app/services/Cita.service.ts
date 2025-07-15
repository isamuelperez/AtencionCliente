import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CitaService {

  citas : any[] = [];
  constructor() {
    this.loadCitas()
  }

  loadCitas(){
    this.citas = [
    {
      nombre: 'Juan',
      apellidos: 'Pérez Gómez',
      celular: '3001234567',
      email: 'juan.perez@example.com',
      sexo: 'Masculino',
      motivo: 'Sugerencia',
      fecha: new Date('2025-07-01')
    },
    {
      nombre: 'Ana',
      apellidos: 'Martínez Rojas',
      celular: '3107654321',
      email: 'ana.martinez@example.com',
      sexo: 'Femenino',
      motivo: 'Reclamación',
      fecha: new Date('2025-07-03')
    },
    {
      nombre: 'Carlos',
      apellidos: 'Gutiérrez Ruiz',
      celular: '3111122333',
      email: 'carlos.gutierrez@example.com',
      sexo: 'Masculino',
      motivo: 'Sugerencia',
      fecha: new Date('2025-07-04')
    },
    {
      nombre: 'Laura',
      apellidos: 'Fernández Díaz',
      celular: '3123344556',
      email: 'laura.fernandez@example.com',
      sexo: 'Femenino',
      motivo: 'Reclamación',
      fecha: new Date('2025-07-05')
    },
    {
      nombre: 'Diego',
      apellidos: 'Ramírez Torres',
      celular: '3139988776',
      email: 'diego.ramirez@example.com',
      sexo: 'Masculino',
      motivo: 'Queja',
      fecha: new Date('2025-07-06')
    },
    {
      nombre: 'María',
      apellidos: 'López Salazar',
      celular: '3145566778',
      email: 'maria.lopez@example.com',
      sexo: 'Femenino',
      motivo: 'Queja',
      fecha: new Date('2025-07-07')
    },
    {
      nombre: 'Andrés',
      apellidos: 'Castro Mejía',
      celular: '3154433221',
      email: 'andres.castro@example.com',
      sexo: 'Masculino',
      motivo: 'Queja',
      fecha: new Date('2025-07-08')
    },
    {
      nombre: 'Camila',
      apellidos: 'Moreno Vargas',
      celular: '3161239874',
      email: 'camila.moreno@example.com',
      sexo: 'Femenino',
      motivo: 'Queja',
      fecha: new Date('2025-07-09')
    },
    {
      nombre: 'Luis',
      apellidos: 'Navarro Quintero',
      celular: '3175678901',
      email: 'luis.navarro@example.com',
      sexo: 'Masculino',
      motivo: 'Incidencia',
      fecha: new Date('2025-07-10')
    },
    {
      nombre: 'Paola',
      apellidos: 'Ortega Páez',
      celular: '3186543210',
      email: 'paola.ortega@example.com',
      sexo: 'Femenino',
      motivo: 'Incidencia',
      fecha: new Date('2025-07-11')
    }
  ];
  }
  


}
