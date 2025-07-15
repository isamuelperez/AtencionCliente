import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CitaService } from '../../services/Cita.service';
import { DatePickerModule } from 'primeng/datepicker';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-atencion-cliente',
  imports: [
    FormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    CommonModule,
    DatePickerModule,
    FloatLabelModule,
    DialogModule,
  ],
  templateUrl: './atencion-cliente.html',
  styleUrl: './atencion-cliente.css',
})
export class AtencionCliente implements OnInit {
  citas: any[] = [];

  newLista: any[] = [];

  filterValue: string = '';
  rangeDates: Date[] | undefined;

  dialog: boolean = false;

  constructor(
    private _citaService: CitaService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {
    this.citas = _citaService.citas;
  }

  ngOnInit(): void {
    /*
    setInterval(() => {
      window.location.reload();
    }, 30000);
    */
  }

  // Filtrado y Ordenamiento
  applyFilter(): void {
    if (this.filterValue != '') {
      this.citas = this.citas.filter((e: { nombre: string }) =>
        e.nombre.toLowerCase().includes(this.filterValue.toLocaleLowerCase())
      );
    } else {
      this.citas = this._citaService.citas;
    }
  }

  filtroFechas(data: any) {
    if (data[1] != null) {
      this.filtrarPorRangoDeFechas(data);
      this.citas = this.listaFiltrada;
    }
  }

  filtrarPorRangoDeFechas(data: any) {
    //data[1] = data[1].setHours(23, 59, 59, 999);
    this.filtro(data);
  }

  limpiar() {
    this.citas = this._citaService.citas;
    this.rangeDates = [];
  }

  listaFiltrada: any[] = [];
  message: string = '';

  filtro(data: any) {

    this.listaFiltrada = this.citas.filter((cita) => {
      const fecha = new Date(cita.fecha);
      return fecha >= data[0]! && fecha <= data[1]!;
    });

    this.message = `Se ejecuto la sentencia sql para el filtro del rango de fechas:     
          SELECT * FROM ATENCION_CLIENTE
          WHERE fecha BETWEEN ${data[0]} AND ${data[1]}; 
        `;
    this.dialog = true;
  }

  hideDialog(): void {
    this.dialog = false;
  }

  onSort(event: any): void {}
}
