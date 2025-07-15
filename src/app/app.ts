import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenubarModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AtencionCliente');
    items: MenuItem[] = [
    {
      label: 'Citas',
      icon: 'pi pi-id-card',
      routerLink: ['/citas']
    },
    {
      label: 'Cliente',
       icon: 'pi pi-user',
      routerLink: ['/clientes']
    },
  ];
}
