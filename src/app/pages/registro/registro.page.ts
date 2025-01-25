import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular'; // Importa Storage

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false,
})
export class RegistroPage implements OnInit {
  registroForm!: FormGroup; // Declara el FormGroup
  isAlertOpen = false; // Controla si la alerta está abierta
  alertMessage = ''; // Mensaje dinámico para la alerta
  alertButtons = [
    {
      text: 'Aceptar',
      handler: () => {
        if (this.alertMessage === 'Registro exitoso') {
          this.navigateToHome(); // Redirige al home si el registro fue exitoso
        }
      },
    },
  ];

  constructor(
    private fb: FormBuilder, // Inyecta FormBuilder
    private router: Router,
    private storage: Storage // Inyecta Storage
  ) {
    this.initStorage(); // Inicializa el almacenamiento
  }

  // Inicializa el almacenamiento
  private async initStorage() {
    await this.storage.create();
  }

  ngOnInit() {
    // Inicializa el FormGroup
    this.registroForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      numeroCasa: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  setOpen(isOpen: boolean, message: string = '') {
    this.isAlertOpen = isOpen;
    this.alertMessage = message; // Actualiza el mensaje de la alerta
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  async onRegister() {
    if (this.registroForm.invalid) {
      this.setOpen(true, 'Registro inválido. Por favor completa todos los campos correctamente.');
      return;
    }

    const formData = this.registroForm.value;

    if (formData.password !== formData.confirmPassword) {
      this.setOpen(true, 'Las contraseñas no coinciden.');
      return;
    }

    // Guarda los datos en el almacenamiento
    await this.storage.set('usuario', formData);
    console.log('Datos almacenados:', formData);

    // Muestra alerta de éxito y redirige
    this.setOpen(true, 'Registro exitoso');
  }
}
