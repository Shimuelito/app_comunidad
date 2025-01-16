import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false
})
export class HomePage {

  constructor(private router: Router, private userService: UserService) {}
  usuario={
    username:'',
    password:''
  }
  ngOnInit() {
  }
    onSubmit(){
      // Comprobamos si es un usuario común o administrador
      if (this.usuario.username === 'admin' && this.usuario.password === '123456') {
        console.log('Administrador - Redirigiendo a la vista de administrador');
        this.router.navigate(['/vista-administrador']);  // Redirigir al administrador
      } else {
        // Validar usuario registrado
        const user = this.userService.checkUser(this.usuario.username, this.usuario.password);
        if (user) {
          console.log('Usuario común - Redirigiendo a la vista de arrendatario');
          this.router.navigate(['/vista-arrendatario']);  // Redirigir al usuario común
        } else {
          console.log('usuario incorrecto');
          // Aquí podrías agregar lógica para mostrar un mensaje de error
        }
      }
    }
}
