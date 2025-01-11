import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-comprobante',
  templateUrl: './comprobante.page.html',
  styleUrls: ['./comprobante.page.scss'],
  standalone:false,
})
export class ComprobantePage implements OnInit {
  showAlert: boolean = false;
  constructor(private router: Router) {}
    isAlertOpen = false;
    alertButtons = [
      {
        text: 'Listo',
        handler: () => {
          this.navigateToVistaArrendatario();  // Redirige a la vista arrendatariio cuando se hace clic en "Aceptar"
        }
      }
    ];
  
    setOpen(isOpen: boolean) {
      this.isAlertOpen = isOpen;
    }
    navigateToVistaArrendatario() {
      this.router.navigate(['/vista-arrendatario']);  // Esto redirige a la página vista arrendatario
    }
  ngOnInit() {
  }

}
