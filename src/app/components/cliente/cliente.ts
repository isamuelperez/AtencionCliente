import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { SelectModule } from 'primeng/select';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-cliente',
  imports: [
    ButtonModule,
    InputTextModule,
    FloatLabelModule,
    SelectModule,
    ReactiveFormsModule,
    DialogModule,
    ConfirmDialogModule,
    ToastModule,
  ],
  templateUrl: './cliente.html',
  styleUrl: './cliente.css',
})
export class Cliente implements OnInit {
  public myForm!: FormGroup;
  sexo: any[] | undefined;
  motivo: any[] = [];

  constructor(
    private fb: FormBuilder,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.sexo = [
      { name: 'Mascululino', code: '1' },
      { name: 'Femenino', code: '2' },
      { name: 'Otro', code: '3' },
    ];

    this.motivo = [
      { name: 'Incidencia', code: 1 },
      { name: 'Queja', code: 2 },
      { name: 'Reclamación' },
      { name: 'Sugerencia' },
    ];

    this.myForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      celular: ['', [Validators.required]],
      email: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
      motivo: ['', [Validators.required]],
    });
  }

  guardar() {
    if (!this.myForm.invalid) {
      console.log(this.myForm.value);
      this.confirmationService.confirm({
        message:
          `se ejecutara la sentencia sql para  Verificar si el teléfono tiene una Incidencia, Queja o Reclamación hoy: 
          SELECT 1 FROM ATENCION_CLIENTE WHERE celular = '3001234567'
          AND motivo IN ('Incidencia', 'Queja', 'Reclamación')
          AND CAST(fecha AS DATE) = CAST(GETDATE() AS DATE);` +
          `se ejecutara la sentencia sql para guardar el cliente: INSERT INTO ATENCION_CLIENTE 
          (nombre, apellidos, celular, email, sexo, motivo, fecha) 
          VALUES ('${this.myForm.value.nombre}', '${this.myForm.value.apellidos}', '${this.myForm.value.celular}', 
          '${this.myForm.value.email}', '${this.myForm.value.sexo.name}', '${this.myForm.value.motivo.name}', GETDATE()); 
        `,

        header: 'Confirmar',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Éxito',
            detail: 'Cliente guardado',
            life: 3000,
          });
          this.myForm.reset();
        },
      });
    } else {
      console.log('datos invalidos');
      this.myForm.markAllAsTouched();
    }
  }
}
