import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular'; // Importamos Storage

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  usuario = {
    username: '',
    password: '',
  };

  constructor(private router: Router, private storage: Storage) {
    this.initStorage(); // Inicializa el almacenamiento
  }

  // Inicializa el almacenamiento
  private async initStorage() {
    await this.storage.create();
  }

  ngOnInit() {}

  async login() {
    // Usuario predefinido (admin)
    const admin = { username: 'admin', password: 'adminsito' };

    // Recupera los datos del usuario almacenados
    const storedUser = await this.storage.get('usuario');

    if (!storedUser && (this.usuario.username !== admin.username || this.usuario.password !== admin.password)) {
      alert('No hay un usuario registrado o las credenciales son incorrectas. Por favor, regístrate primero o usa el usuario admin.');
      this.router.navigate(['/Registro']); // Redirige al registro si no hay datos o si no es admin
      return;
    }

    // Verifica si es el admin
    if (this.usuario.username === admin.username && this.usuario.password === admin.password) {
      alert('Inicio de sesión como administrador exitoso.');
      this.router.navigate(['/vista-administrador']); // Redirige a la página "vista-administrador" si es admin
    } else if (storedUser && storedUser.username === this.usuario.username && storedUser.password === this.usuario.password) {
      // Verifica las credenciales del usuario almacenado
      alert('Inicio de sesión exitoso.');
      this.router.navigate(['/vista-arrendatario']); // Redirige a la página "vista-arrendatario" si es usuario normal
    } else {
      alert('Usuario o contraseña incorrectos.');
    }
  }
}
