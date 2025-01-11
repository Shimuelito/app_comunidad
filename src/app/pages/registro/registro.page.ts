import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false,
})
export class RegistroPage implements OnInit {

  constructor(private router: Router) {}
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
  }

}
