import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historial-admin',
  templateUrl: './historial-admin.page.html',
  styleUrls: ['./historial-admin.page.scss'],
  standalone: false
})
export class HistorialAdminPage {
   // Datos del historial
   historial = [
    { fecha: '30/01/2025', depto: 40, nombre: 'Jorge', estado: 'rechazado', comentario: 'Pago pendiente' },
    { fecha: '30/02/2025', depto: 40, nombre: 'Jorge', estado: 'prox pago', comentario: 'Debe el mes pasado' },
    { fecha: '30/02/2025', depto: 40, nombre: 'Jorge', estado: 'Aprobado', comentario: 'Todo ok' },
  ];

  // Opciones de filtro
  deptos = [40, 50, 60]; // Ejemplo de departamentos
  estados = ['rechazado', 'prox pago', 'Aprobado']; // Estados posibles
  selectedDepto: number | null = null;
  selectedEstado: string | null = null;

  // Historial filtrado
  filteredHistorial = [...this.historial];

  constructor() { }
  filterList() {
    this.filteredHistorial = this.historial.filter((item) => {
      const matchesDepto = this.selectedDepto ? item.depto === this.selectedDepto : true;
      const matchesEstado = this.selectedEstado ? item.estado === this.selectedEstado : true;
      return matchesDepto && matchesEstado;
    })
  }
  ngOnInit() {
  }

}
