import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DatePickerModule } from 'primeng/datepicker';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DialogModule } from 'primeng/dialog';

import { CitaService } from '../../services/Cita.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-atencion-cliente',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    DatePickerModule,
    FloatLabelModule,
    DialogModule,
  ],
  templateUrl: './atencion-cliente.html',
  styleUrl: './atencion-cliente.css',
})
export class AtencionCliente implements OnInit {
  citas: any[] = [];
  citasOriginales: any[] = [];

  filterValue: string = '';
  rangeDates: Date[] | undefined;

  dialog: boolean = false;
  message: string = '';

  constructor(
    private _citaService: CitaService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    setInterval(() => {
      window.location.reload();
    }, 30000);
    this.citasOriginales = this._citaService.citas;
    this.citas = [...this.citasOriginales];
  }

  // Filtro por texto (nombre)
  applyFilter(): void {
    const filtro = this.filterValue.trim().toLowerCase();
    this.citas = filtro
      ? this.citasOriginales.filter((e) =>
          e.nombre?.toLowerCase().includes(filtro)
        )
      : [...this.citasOriginales];
  }

  // Filtro por rango de fechas
  filtroFechas(data: Date[]): void {
    if (data?.[1]) {
      this.citas = this.citasOriginales.filter((cita) => {
        const fecha = new Date(cita.fecha);
        return fecha >= data[0]! && fecha <= data[1]!;
      });

      this.message = `Se ejecutó la sentencia SQL para el filtro del rango de fechas:     
        SELECT * FROM ATENCION_CLIENTE
        WHERE fecha BETWEEN ${data[0]} AND ${data[1]};`;

      this.dialog = true;
    }
  }

  // Limpia filtros y búsqueda
  limpiar(): void {
    this.citas = [...this.citasOriginales];
    this.rangeDates = [];
    this.filterValue = '';
  }

  hideDialog(): void {
    this.dialog = false;
  }

  // Si deseas usar ordenamiento personalizado
  onSort(event: any): void {}
}
