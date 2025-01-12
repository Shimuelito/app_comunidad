import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultas-arrendatario',
  templateUrl: './consultas-arrendatario.page.html',
  styleUrls: ['./consultas-arrendatario.page.scss'],
  standalone:false,
})
export class ConsultasArrendatarioPage implements OnInit {
 // Datos de ejemplo para la tabla
  tableData: any[] = [
    { fecha: '30/01/2025', depto: 40, nombre: 'Jorge', estado: 'rechazado', comentario: 'Pago pendiente' },
    { fecha: '30/02/2025', depto: 40, nombre: 'Jorge', estado: 'próximo pago', comentario: 'Debe el mes pasado' },
    { fecha: '30/02/2025', depto: 40, nombre: 'Jorge', estado: 'aprobado', comentario: 'Todo ok' },
  ];
  constructor() { }
 // Implementación de la función clearTable()
  clearTable() {
    this.tableData = []; // Limpia los datos de la tabla
    console.log('Datos de la tabla limpiados');
  }
  ngOnInit() {
  }

}
