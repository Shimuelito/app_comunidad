import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular'; // Importamos Storage
import { Router } from '@angular/router';

@Component({
  selector: 'app-vista-arrendatario',
  templateUrl: './vista-arrendatario.page.html',
  styleUrls: ['./vista-arrendatario.page.scss'],
  standalone: false,
})
export class VistaArrendatarioPage implements OnInit {
  usuario: any = {}; // Variable para almacenar los datos del usuario

  constructor(private storage: Storage, private router: Router) {}

  // Inicializar la base de datos de Ionic Storage
  async ngOnInit() {
    await this.storage.create();  // Asegúrate de que la base de datos se haya creado primero

    // Recuperamos los datos del usuario almacenados
    const storedUser = await this.storage.get('usuario');
    if (storedUser) {
      this.usuario = storedUser; // Asignamos los datos del usuario a la variable
    }
  }

  // Función para cerrar sesión
  async logout() {
    await this.storage.remove('usuario'); // Elimina los datos del usuario
    this.router.navigate(['/home']); // Redirige al inicio
  }
}
