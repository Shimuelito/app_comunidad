import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-comprobante',
  templateUrl: './comprobante.page.html',
  styleUrls: ['./comprobante.page.scss'],
  standalone: false,
})
export class ComprobantePage implements OnInit {
  showAlert: boolean = false;
  nombre: string = ''; // Para almacenar el nombre
  numeroCasa: number | string = ''; // Para almacenar el número de casa

  // Variable para almacenar el formulario
  comprobante = {
    nombre: '',
    numeroCasa: '',
    metodoPago: '',
    comentario: ''
  };

  constructor(private router: Router, private storage: Storage) {
    this.initStorage();
  }

  async initStorage() {
    await this.storage.create();
    const storedUserData = await this.storage.get('usuario');
    if (storedUserData) {
      this.nombre = storedUserData.nombre;  // Asignamos el nombre
      this.numeroCasa = storedUserData.numeroCasa;  // Asignamos el número de casa
    }
  }

  isAlertOpen = false;
  alertButtons = [
    {
      text: 'Listo',
      handler: () => {
        this.navigateToVistaArrendatario(); // Redirige a la vista arrendatario cuando se hace clic en "Aceptar"
      }
    }
  ];

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  navigateToVistaArrendatario() {
    this.router.navigate(['/vista-arrendatario']);  // Esto redirige a la página vista arrendatario
  }

  // Validación antes de enviar
  validateAndSubmit() {
    if (!this.comprobante.metodoPago || !this.comprobante.comentario) {
      // Si no hay método de pago o comentario
      this.showAlert = true;  // Muestra el mensaje de error
    } else {
      // Si todo está bien, guardar en el almacenamiento y redirigir
      this.storage.get('historial').then((historial) => {
        const newHistorial = historial || [];  // Si no existe historial, crear uno nuevo
        newHistorial.push({
          fecha: new Date().toLocaleDateString(),
          depto: this.numeroCasa,
          nombre: this.nombre,
          estado: 'Pendiente',
          comentario: this.comprobante.comentario
        });
        this.storage.set('historial', newHistorial);
        console.log('Comprobante enviado correctamente', this.comprobante);
        this.setOpen(true);  // Muestra el alerta de éxito
      });
    }
  }

  ngOnInit() {
  }
}
