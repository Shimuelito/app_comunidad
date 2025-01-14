import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-admin',
  templateUrl: './not-admin.page.html',
  styleUrls: ['./not-admin.page.scss'],
  standalone: false
})
export class NotAdminPage implements OnInit {
  notifications = [
    { text: 'Has recibido una notificación de tu comprobante.' },
    { text: 'Has recibido una nueva notificación de tu comprobante.' },
  ];

  constructor() { }
  // Simular recibir una nueva notificación
  addNotification() {
    const newNotification = {
      text: 'Nueva notificación recibida.',
    };
    this.notifications = [newNotification, ...this.notifications];
  }

  // Ver una notificación
  viewNotification(index: number) {
    console.log('Ver notificación:', this.notifications[index].text);
    // Aquí puedes agregar más lógica para abrir un detalle o marcar como vista
  }

  // Eliminar una notificación
  deleteNotification(index: number) {
    this.notifications.splice(index, 1);
    console.log('Notificación eliminada.');
  }

  ngOnInit() {
  }

}
