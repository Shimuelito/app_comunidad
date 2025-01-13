import { Component, OnInit, isStandalone } from '@angular/core';

@Component({
  selector: 'app-bandeja-admin',
  templateUrl: './bandeja-admin.page.html',
  styleUrls: ['./bandeja-admin.page.scss'],
  standalone: false
})
export class BandejaAdminPage implements OnInit {

  filters: string[] = [];
  items = [
    { nombre: 'Ramito', fecha: '01/01/2025', comprobante: 'Recibido', depto: 90 },
    { nombre: 'Palita', fecha: '01/01/2025', comprobante: 'Recibido', depto: 90 },
    { nombre: 'Felipe', fecha: '01/01/2025', comprobante: 'Enviado', depto: 90 },
  ];
  clearFilters() {
    this.filters = [];
  }
  verDetalle(item: any) {
    console.log('Detalle del item:', item);
  }
  constructor() { }
  actualizar() {
    console.log('Actualizando lista...');
    // Aquí puedes agregar lógica para actualizar la lista desde un servicio.
  }
  ngOnInit() {
  }

}
