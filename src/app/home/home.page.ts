import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false
})
export class HomePage {

  constructor(private router: Router) {}
  usuario={
    username:'',
    password:''
  }
  ngOnInit() {
  }
    onSubmit(){
      console.log("works!!!!");
      // Comprobamos si es un usuario común o administrador
    if (this.usuario.username === 'admin' && this.usuario.password === '123456') {
      console.log('Administrador - Redirigiendo a la vista de administrador');
      this.router.navigate(['/vista-administrador']);  // Redirigir al administrador
    } else if (this.usuario.username && this.usuario.password) {
      console.log('Usuario común - Redirigiendo a la vista de arrendatario');
      this.router.navigate(['/vista-arrendatario']);  // Redirigir a vista arrendatario
    } else {
      console.log('Credenciales incorrectas');
      // Aquí podrías agregar lógica para mostrar un mensaje de error o redirigir a la página de recuperación de contraseña.
    }
    
  }
}
