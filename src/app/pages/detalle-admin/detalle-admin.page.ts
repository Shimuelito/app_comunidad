import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-admin',
  templateUrl: './detalle-admin.page.html',
  styleUrls: ['./detalle-admin.page.scss'],
  standalone: false
})
export class DetalleAdminPage implements OnInit {
  estado: string = '';
  comentario: string = '';

  enviar() {
    console.log('Estado:', this.estado);
    console.log('Comentario:', this.comentario);
    // Lógica para enviar los datos
  }

  constructor() { }

  ngOnInit() {
  }

}
