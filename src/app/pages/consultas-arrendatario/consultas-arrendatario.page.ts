import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-consultas-arrendatario',
  templateUrl: './consultas-arrendatario.page.html',
  styleUrls: ['./consultas-arrendatario.page.scss'],
  standalone: false,
})
export class ConsultasArrendatarioPage implements OnInit {
  tableData: any[] = []; // Para almacenar los datos que se mostrarán

  constructor(private storage: Storage) {
    this.initStorage();
  }

  private async initStorage() {
    await this.storage.create(); // Crea el almacenamiento si no está creado
    this.loadTableData(); // Carga los datos al iniciar
  }

  private async loadTableData() {
    const storedData = await this.storage.get('historial');
    if (storedData) {
      this.tableData = storedData; // Asigna los datos al array tableData
    }
  }

  // Función para limpiar el historial en la página
  clearTable() {
    this.tableData = [];
    this.storage.set('historial', []);
    console.log('Datos de la tabla y almacenamiento limpiados');
  }

  // Función para actualizar la tabla (recargar los datos)
  updateTable() {
    this.loadTableData();  // Recarga los datos desde el almacenamiento
    console.log('Tabla actualizada');
  }

  ngOnInit() {}
}
