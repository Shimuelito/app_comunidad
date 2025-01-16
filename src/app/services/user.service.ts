import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: { username: string; password: string; email: string; nombre: string; numeroCasa: string }[] = [];

  constructor() {}

  // Método para registrar un nuevo usuario
  registerUser(user: { username: string; password: string; email: string; nombre: string; numeroCasa: string }) {
    this.users.push(user);
    console.log('Usuario registrado:', user);
  }
  // Método para verificar credenciales
  validateUser(username: string, password: string): boolean {
    return this.users.some(
      (user) => user.username === username && user.password === password
    );
  }
// Guardar usuario en localStorage
saveUser(user: any) {
  const users = this.getUsers(); // Obtiene los usuarios existentes
  users.push(user); // Agrega el nuevo usuario al array
  localStorage.setItem('users', JSON.stringify(users)); // Guarda en localStorage
}

// Obtener usuarios del localStorage
getUsers() {
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : []; // Si no hay usuarios, retorna un array vacío
}

// Comprobar si un usuario existe
checkUser(username: string, password: string) {
  const users = this.getUsers();
  return users.find((user: any) => user.username === username && user.password === password);
}
}
