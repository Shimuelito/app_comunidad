import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false,
})
export class RegistroPage implements OnInit {

  registroForm!: FormGroup;
  
  constructor(private fb: FormBuilder ,private router: Router) {}
  isAlertOpen = false;
  alertButtons = [
    {
      text: 'Listo',
      handler: () => {
        this.navigateToHome();  // Redirige al Home cuando se hace clic en "Aceptar"
      }
    }
  ];

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
  navigateToHome() {
    this.router.navigate(['/home']);  // Esto redirige a la página Home
  }
  

  ngOnInit() {
     // Inicializa el formulario con validaciones
     this.registroForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      numeroCasa: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    }, { validator: this.passwordMatchValidator });
  }
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }
  onSubmit() {
    if (this.registroForm.valid) {
      console.log('Formulario válido:', this.registroForm.value);
      this.router.navigate(['/home']); // Redirige a la página principal
    } else {
      console.log('Formulario inválido');
    }
  }

}
