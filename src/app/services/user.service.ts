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

  // Método para obtener los usuarios registrados
  getUsers() {
    return this.users;
  }

  // Método para verificar credenciales
  validateUser(username: string, password: string): boolean {
    return this.users.some(
      (user) => user.username === username && user.password === password
    );
  }
}
